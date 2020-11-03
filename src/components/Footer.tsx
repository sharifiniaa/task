import React, { ReactElement } from 'react';

const Footer = (): ReactElement => {
    return (
        <div className="flex justify-center flex-row bg-teal-400">
            <div className="container mx-auto  max-w-7xl p-8">
                <div className="sm:flex mb-4">
                    <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                        <div className="text-blue mb-2">Site Links</div>
                        <ul className="list-reset leading-normal">
                            <li className="hover:text-blue text-grey-darker">Home</li>
                            <li className="hover:text-blue text-grey-darker">Top 100</li>
                            <li className="hover:text-blue text-grey-darker">Top Authors</li>
                        </ul>

                        <div className="text-blue-light mb-2 mt-4">Mobile Apps</div>
                        <ul className="list-reset leading-normal">
                            <li className="hover:text-blue-light text-grey-darker">App Store</li>
                            <li className="hover:text-blue-light text-grey-darker">Play Store</li>
                            <li className="hover:text-blue-light text-grey-darker">Three</li>
                        </ul>
                    </div>
                    <div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
                        <div className="text-green-dark mb-2">Green-dark</div>
                        <ul className="list-reset leading-normal">
                            <li className="hover:text-green-dark text-grey-darker">One</li>
                            <li className="hover:text-green-dark text-grey-darker">Two</li>
                            <li className="hover:text-green-dark text-grey-darker">Three</li>
                        </ul>

                        <div className="text-green-light mb-2 mt-4">Green-light</div>
                        <ul className="list-reset leading-normal">
                            <li className="hover:text-green-light text-grey-darker">One</li>
                            <li className="hover:text-green-light text-grey-darker">Two</li>
                            <li className="hover:text-green-light text-grey-darker">Three</li>
                        </ul>
                    </div>
                    {/* <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                        <div className="text-red-light mb-2">Newsletter</div>
                            <p className="text-grey-darker leading-normal">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur.{' '}
                            </p>
                            <div className="mt-4 flex">
                                <input
                                    type="text"
                                    className="p-2 border border-grey-light round text-grey-dark text-sm h-auto"
                                    placeholder="Your email address"
                                />
                                <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;
