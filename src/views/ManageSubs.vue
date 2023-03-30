<template>
    <div class="w-[80%] h-full dark:bg-[#151718] dark:text-white p-6">
        <div class="flex flex-col w-full h-52 gap-5">
            <div class="flex justify-center items-center m-2">
                <span class="text-4xl font-bold">Designed for business teams like yours</span>
            </div>
            <div class="flex flex-col justify-center items-center text-xl font-light tracking-wider dark:text-slate-300">
                <span>Here at Flowbite we focus on markets where technology, innovation, and capital</span>
                <span>can unlock long-term value and drive economic growth.</span>
            </div>
            <div class="flex justify-center items-center gap-5 mt-1">
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
        <div class="flex w-full h-[calc(100%-13rem)] gap-16 p-6 rounded-lg">

            <div class="flex flex-col w-1/3 h-full justify-center items-center dark:bg-slate-800 gap-1">
                <span class="text-2xl">Starter</span>
                <span class="text-5xl font-bold my-3">$29</span>
                <span class="dark:text-slate-400">$19 USD per month, paid annually</span>

                <button class="flex justify-center items-center gap-2 dark:text-blue-600 dark:hover:text-blue-700">Go to
                    annual plan
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right w-4 h-4"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </button>
                <button
                    class="flex justify-center items-center w-[90%] h-10 my-6 dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white rounded-lg">Get
                    started</button>

                <div class="space-y-2">

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

                </div>
            </div>

            <div class="flex w-1/3 h-full justify-center items-center dark:bg-slate-800">
                <span class="text-2xl">Starter</span>
            </div>

            <div class="flex w-1/3 h-full justify-center items-center dark:bg-slate-800">
                <span class="text-2xl">Starter</span>
            </div>

        </div>
    </div>
</template>