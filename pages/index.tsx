import { FC } from 'react';
import { Quotes } from '../src/components/Quotes';
import { NavBar } from '../src/components/NavBar';
import { Quote } from '../src/components/types';
import { QUOTES } from '../src/data/qutoes';
import Footer from '../src/components/Footer';
import QuoteCard from '../src/components/QuoteCard';

const IndexPage: FC = () => {
    const quotes: Quote[] = QUOTES;
    return (
        <>
            <NavBar />
            <div className="container mx-auto  max-w-7xl">
                <div className="bg-teal-400 ">
                    <button
                        type="button"
                        className="inline-flex justify-center  px-4 py-2 bg-teal text-sm leading-5 font-medium text-teal-700 hover:text-white focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-50 active:text-teal-800 transition ease-in-out duration-150"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        All Categories
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <button
                        type="button"
                        className="inline-flex justify-center  px-4 py-2 bg-teal text-sm leading-5 font-medium text-teal-700 hover:text-teal-500 focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-50 active:text-teal-800"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Top 100
                    </button>
                    <button
                        type="button"
                        className="inline-flex justify-center  px-4 py-2 bg-teal text-sm leading-5 font-medium text-teal-700 hover:text-teal-500 focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-50 active:text-teal-800"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Top Authors
                    </button>
                    <button
                        type="button"
                        className="inline-flex justify-center  px-4 py-2 bg-teal text-sm leading-5 font-medium text-teal-700 hover:text-teal-500 focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-50 active:text-teal-800"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Top Searched
                    </button>
                </div>
                <div className="mt-4">
                    <p>Search results for 'buddha'</p>
                </div>
                <div className="flex flex-row flex-wrap justify-start mt-4">
                    {quotes &&
                        quotes.map((quote: Quote, index: number) => {
                            return <QuoteCard key={`quote-${index}`} quote={quote} />;
                        })}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default IndexPage;
