<template>
    <div
        class="w-full h-full p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-rounded-full">
        <div class="flex flex-col w-full h-52 gap-5">
            <div class="flex justify-center items-center m-2">
                <span class="text-4xl font-bold">Designed for business teams like yours</span>
            </div>
            <div class="flex flex-col justify-center items-center text-xl dark:font-light tracking-wider dark:text-slate-300">
                <span>Here at Flowbite we focus on markets where technology, innovation, and capital</span>
                <span>can unlock long-term value and drive economic growth.</span>
            </div>
            <div class="flex justify-center items-center gap-5 mt-1 font-medium">
                <span>Monthly</span>

                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div
                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                    </div>
                </label>

                <span class="dark:text-slate-300">Yearly</span>
            </div>
        </div>
        <div class="flex w-full h-[45rem] gap-10 p-6 rounded-lg">

            <div
                class="flex flex-col w-1/3 h-full py-6 justify-center items-center dark:bg-slate-800 bg-slate-300 rounded-lg gap-1 transition ease-in-out drop-shadow-lg hover:scale-110 hover:border-2 border-blue-500">
                <span class="drop-shadow-lg text-2xl">Starter</span>
                <span class="drop-shadow-lg text-5xl font-bold my-3">$29</span>
                <span class="dark:text-slate-400">$19 USD per month, paid annually</span>

                <button class="flex justify-center items-center gap-2 text-blue-600 hover:text-blue-700">Go to
                    annual plan
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right w-4 h-4"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
                <button
                    class="flex justify-center items-center w-[90%] h-10 my-6 bg-slate-500 hover:bg-blue-500 dark:hover:bg-blue-500 dark:bg-slate-600 dark:text-white rounded-lg">Get
                    started</button>

                <div class="space-y-1">

                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-credit-card-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                        </svg>
                        <span class="">All tools you need to manage payments</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-emoji-smile-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                        </svg>
                        <span class="flex items-center mt-2">No setup, monthly, or hidden fees</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-shield-fill-check w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z" />
                        </svg>
                        <span class="flex items-center mt-2">Comprehensive security</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-box-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
                        </svg>
                        <span class="flex items-center mt-2 line-through">Get hundreds of feature updates</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-fire w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                        <span class="flex items-center mt-2 line-through">Payouts to your bank account</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-clipboard2-data-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                            <path
                                d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
                        </svg>
                        <span class="flex items-center mt-2 line-through">Financial reconciliation and reporting</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-chat-dots-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <span class="flex items-center mt-2 line-through">24×7 phone, chat, and email support</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-box-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
                        </svg>
                        <span class="flex items-center mt-2 line-through">Robust developer platform</span>
                    </div>
                </div>
            </div>

            <div
                class="flex flex-col w-1/3 h-full justify-center items-center dark:bg-slate-800 bg-slate-300 rounded-lg gap-1 drop-shadow-lg transition ease-in-out hover:scale-110 hover:border-2 border-blue-500">
                <span
                    class="w-[100px] h-6 p-1 flex justify-center items-center -mt-4 pb-2 rounded-b-sm text-sm bg-slate-400 dark:bg-white dark:text-blue-700 font-medium drop-shadow-lg">Most
                    popular</span>
                <span class="text-2xl drop-shadow-lg">Premium</span>
                <span class="text-5xl font-bold my-3 drop-shadow-lg">$199</span>
                <span class="dark:text-slate-400">$159 USD per month, paid annually</span>

                <button class="flex justify-center items-center gap-2 text-blue-600 hover:text-blue-700">Go to
                    annual plan
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right w-4 h-4"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
                <button
                    class="flex justify-center items-center w-[90%] h-10 my-6 drop-shadow-lg bg-slate-500 hover:bg-blue-500 dark:hover:bg-blue-500 dark:bg-slate-600 dark:text-white rounded-lg">Get
                    started</button>

                <div class="space-y-1 w-full h-auto mb-5">

                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-credit-card-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                        </svg>
                        <span class="">All tools you need to manage payments</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-emoji-smile-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                        </svg>
                        <span class="flex items-center mt-2">No setup, monthly, or hidden fees</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-shield-fill-check w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z" />
                        </svg>
                        <span class="flex items-center mt-2">Comprehensive security</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-box-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
                        </svg>
                        <span class="flex items-center mt-2">Get hundreds of feature updates</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-fire w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                        <span class="flex items-center mt-2">Payouts to your bank account</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-clipboard2-data-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                            <path
                                d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
                        </svg>
                        <span class="flex items-center mt-2 line-through">Financial reconciliation and reporting</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-chat-dots-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <span class="flex items-center mt-2 line-through">24×7 phone, chat, and email support</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-box-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
                        </svg>
                        <span class="flex items-center mt-2 line-through">Robust developer platform</span>
                    </div>
                </div>
            </div>

            <div
                class="flex flex-col w-1/3 h-full py-6 justify-center items-center dark:bg-slate-800 bg-slate-300 rounded-lg gap-1 transition ease-in-out drop-shadow-lg hover:scale-110 hover:border-2 border-blue-500">
                <span class="drop-shadow-lg text-2xl">Enterprise</span>
                <span class="drop-shadow-lg text-5xl font-bold my-3">$599</span>
                <span class="dark:text-slate-400">$499 USD per month, paid annually</span>

                <button class="flex justify-center items-center gap-2 text-blue-600 hover:text-blue-700">Go to
                    annual plan
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right w-4 h-4"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
                <button
                    class="flex justify-center items-center w-[90%] h-10 my-6 bg-slate-500 hover:bg-blue-500 dark:hover:bg-blue-500 dark:bg-slate-600 dark:text-white rounded-lg">Get
                    started</button>

                <div class="space-y-1">

                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-credit-card-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                        </svg>
                        <span class="">All tools you need to manage payments</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-emoji-smile-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
                        </svg>
                        <span class="flex items-center mt-2">No setup, monthly, or hidden fees</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-shield-fill-check w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z" />
                        </svg>
                        <span class="flex items-center mt-2">Comprehensive security</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-box-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
                        </svg>
                        <span class="flex items-center mt-2">Get hundreds of feature updates</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-fire w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                        </svg>
                        <span class="flex items-center mt-2">Payouts to your bank account</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-clipboard2-data-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                            <path
                                d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
                        </svg>
                        <span class="flex items-center mt-2">Financial reconciliation and reporting</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-chat-dots-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path
                                d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                        <span class="flex items-center mt-2">24×7 phone, chat, and email support</span>
                    </div>
                    <div class="flex items-center w-full h-10 px-5 dark:text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-box-fill w-5 h-5 float-right mr-4 mt-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z" />
                        </svg>
                        <span class="flex items-center mt-2">Robust developer platform</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>