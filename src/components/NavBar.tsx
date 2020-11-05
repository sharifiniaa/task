import React from 'react';

export const NavBar = () => {
    return (
        <header className="lg:px-16 px-6 bg-teal flex flex-wrap items-center bg-teal-400 lg:py-0 py-2">
            <div className="container mx-auto  max-w-7xl">
                <div className="flex justify-between">
                    <div className="flex-1 justify-start items-center">
                        <a href="#">
                            <svg width="32" height="36" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path>
                            </svg>
                        </a>
                    </div>

                    <label for="menu-toggle" className="pointer-cursor lg:hidden block">
                        <svg
                            className="fill-current text-gray-900"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                        >
                            <title>menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />

                    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                        <div className="relative text-teal-600 py-2">
                            <input
                                type="search"
                                name="seyrch"
                                placeholder="Search"
                                className="bg-teal h-10 px-5 pr-10 rounded-md w-full text-lg sm:text-sm focus:outline-none"
                            />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4"></button>
                        </div>
                        <nav>
                            <ul className="lg:flex items-center justify-between text-base text-teal-800 pt-4 lg:pt-0">
                                <li>
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
                                </li>

                                <li>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center  px-4 py-2 bg-teal text-sm leading-5 font-medium text-teal-700 hover:text-white focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-50 active:text-teal-800 transition ease-in-out duration-150"
                                        id="options-menu"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                    >
                                        Top 100
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center  px-4 py-2 bg-teal text-sm leading-5 font-medium text-teal-700 hover:text-white focus:outline-none focus:border-teal-300 focus:shadow-outline-teal active:bg-teal-50 active:text-teal-800 transition ease-in-out duration-150"
                                        id="options-menu"
                                        aria-haspopup="true"
                                        aria-expanded="true"
                                    >
                                        Top Authors
                                    </button>
                                </li>
                            </ul>
                        </nav>
                        {/* <a href="#" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                        <img
                            className="rounded-full w-10 h-10 border-2 border-transparent hover:border-teal-400"
                            src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
                            alt="Andy Leverenz"
                        />
                    </a> */}
                    </div>
                </div>
            </div>
        </header>
    );
};
