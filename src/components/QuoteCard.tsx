import React, { ReactElement } from 'react';
import { QuoteType } from './types';

type QuoteCardPropType = {
    quote: QuoteType;
};
const QuoteCard = (props: QuoteCardPropType): ReactElement => {
    const { quote } = props;

    return (
        <div className=" flex flex-col lg:min-w-sm lg:max-w-sm md:max-w-sm  lg:min-h-md max-w-full bg-teal-100 shadow-sm rounded-lg p-4 m-4">
            <p>"</p>
            <p>{quote.quote}</p>

            <h3 className="font-medium  text-sm text-right text-teal-500 capitalize tracking-min">{quote.author}</h3>
        </div>
    );
};

export default QuoteCard;
