import React, { ReactElement } from 'react';

export const Quotes = (): ReactElement => {
    //     <style>
    // @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
    // </style>
    return (
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
            <div
                className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800"
                style={{ 'maxWidth': '500px' }}
            >
                {/* <div className="w-full pt-1 pb-5">
                    <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                        <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
                    </div>
                </div> */}
                <div className="w-full mb-10 .content-center">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
                    <p className="text-sm text-gray-600 text-center px-5">
                        Whatever you do today, can change the course of entire humanity.
                    </p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
                </div>
                <div className="w-full .content-end">
                    <p className="text-md text-right text-indigo-500 font-bold">Pran</p>
                    <p className="text-xs text-gray-500 text-right">@heypran</p>
                </div>
            </div>
        </div>
    );
};
