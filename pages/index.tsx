import { FC } from 'react';
import { Quotes } from '../src/components/Quotes';
import { NavBar } from '../src/components/NavBar';
import { QuoteType } from '../src/components/types';
import { QUOTES } from '../src/data/qutoes';
import Footer from '../src/components/Footer';
import QuoteCard from '../src/components/QuoteCard';
import Pagination from '../src/components/Pagination';

const IndexPage: FC = () => {
    const quotes: QuoteType[] = QUOTES;
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
                    {quotes &&
                        quotes.map((quote: QuoteType, index: number) => {
                            return <QuoteCard key={`quote-${index}`} quote={quote} />;
                        })}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default IndexPage;
