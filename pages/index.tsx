import { FC, useEffect, useState } from 'react';
import { Quotes } from '../src/components/Quotes';
import { NavBar } from '../src/components/NavBar';
import { QuoteType } from '../src/components/types';
import Footer from '../src/components/Footer';
import QuoteCard from '../src/components/QuoteCard';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

// import Pagination from '../src/components/Pagination';
import axios from 'axios';

const IndexPage: FC = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    //  ****  For client side request ****

    // const [quotes, setQuotes] = useState<QuoteType[] | null>(null);

    /*     useEffect(() => {
        const source = axios.CancelToken.source();
        fetchQuotes(source);

        return () => {
            source.cancel();
        };
    }, []); */

    /*     const fetchQuotes = async (source) => {
        try {
            const { data } = await axios({
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/todos/',
                cancelToken: source.token,
            });
            if (data) {
                setQuotes(data.slice(0, 50));
            }
        } catch (err) {
            // handle error
            console.log(err);
        } finally {
            // disable the loading
        }
    }; */

    return (
        <>
            <NavBar />
            <div className="container mx-auto  max-w-7xl">
                {/* <div className="mt-4 flex flex-row">
                    <div>
                        <p>Search results for 'buddha'</p>
                    </div>
                    <Pagination />
                </div> */}
                <div className="flex flex-row flex-wrap justify-start mt-4">
                    {data &&
                        data.slice(0, 30).map((quote: QuoteType, index: number) => {
                            return <QuoteCard key={`quote-${index}`} quote={quote} />;
                        })}
                </div>
            </div>
            <Footer />
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (_) => {
    const { data } = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos/',
    });
    return {
        props: {
            data,
        },
    };
};

export default IndexPage;
