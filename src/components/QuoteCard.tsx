import React, { ReactElement } from 'react';
import { QuoteType } from './types';

type QuoteCardPropType = {
    quote: QuoteType;
};

/* 

export type QuoteType = {
    userId: number;
    id: number;
    title: string;
    complated: boolean;
};

*/

const QuoteCard = (props: QuoteCardPropType): ReactElement => {
    const { quote } = props;

    return (
        <div
            className={`flex flex-col lg:min-w-sm lg:max-w-sm md:max-w-sm  lg:min-h-md max-w-full bg-teal-100 shadow-sm rounded-lg p-4 m-4 ${
                !quote.complated ? 'bg-teal-500' : ''
            }`}
        >
            <p>{quote.userId}</p>
            <p>{quote.id}</p>

            {quote && <p>completed</p>}

            <h3 className="font-medium  text-sm text-right text-teal-500 capitalize tracking-min">{quote.title}</h3>
        </div>
    );
};

export default QuoteCard;
