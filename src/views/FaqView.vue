<template>
    <div class="w-full h-full p-6">
        <div class="flex flex-col w-full h-[40%] gap-5 drop-shadow-lg">
            <div class="flex justify-center items-center m-2">
                <span class="text-4xl font-bold">How can we help you?</span>
            </div>
            <div
                class="flex flex-col justify-center items-center text-xl dark:font-light tracking-wider dark:text-slate-300">
                <span>Here are a few of the questions we get the most. If you don't see what's on your</span>
                <span>mind, reach out to us anytime on phone, chat, or email.</span>
            </div>
            <div class="flex flex-col w-full h-44 justify-center items-center">
                <div class="flex relative w-full h-full justify-center items-center ">
                    <input type="text"
                        class="w-[64%] h-14 bg-slate-100 dark:bg-slate-700 border-2 border-blue-300 dark:border-blue-500/50 pl-14 focus:ring-0 focus:outline-none rounded-lg placeholder:text-slate-400 placeholder:font-normal placeholder:text-lg"
                        placeholder="Type keywords to find answers">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="bi bi-clipboard2-data-fill absolute w-5 h-5 mr-[695px] cursor-text dark:text-slate-300 text-slate-600"
                        viewBox="0 0 16 16">
                        <path
                            d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                        <path
                            d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
                    </svg>
                </div>
                <span class="text-sm text-slate-400 mb-12">You can also browse the topics below to find what you are looking
                    for.</span>
            </div>
        </div>
        <div class="flex w-full h-[45%] gap-6 drop-shadow-lg">

            <div class="flex flex-col w-1/4 h-full dark:bg-slate-800 shadow-lg hover:border-blue-500 border dark:border-0 p-4 rounded gap-3 transition ease-in-out hover:scale-105">
                <div class="flex justify-center items-center w-12 h-12 bg-blue-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="bi bi-clipboard2-data-fill w-5 h-5 text-blue-600" viewBox="0 0 16 16">
                        <path
                            d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                        <path
                            d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7Zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm4-3a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z" />
                    </svg>
                </div>
                <span class="font-semibold text-xl ">General</span>
                <a href="#" class="hover:underline text-[17px] text-slate-400">About forwarding limits</a>
                <a href="#" class="hover:underline text-[17px] text-slate-400">How to update Flowbite?</a>
                <a href="#" class="hover:underline text-[17px] text-slate-400">How to change privacy settings?</a>
                <a href="#" class="hover:underline text-[17px] text-blue-600">See all</a>
            </div>

            <div class="flex flex-col w-1/4 h-full dark:bg-slate-800 shadow-lg hover:border-blue-500 border dark:border-0 p-4 rounded gap-3 transition ease-in-out hover:scale-105">
                <div class="flex justify-center items-center w-12 h-12 bg-blue-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="bi bi-credit-card-fill w-5 h-5 text-blue-600" viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                    </svg>
                </div>
                <span class="font-semibold text-xl ">License</span>
                <a href="#" class="hover:underline text-[17px] text-slate-400">Verifying your number</a>
                <a href="#" class="hover:underline text-[17px] text-slate-400">How to restore your chat history</a>
                <a href="#" class="hover:underline text-[17px] text-slate-400">How to manage your notifications</a>
                <a href="#" class="hover:underline text-[17px] text-blue-600">See all</a>
            </div>

            <div class="flex flex-col w-1/4 h-full dark:bg-slate-800 shadow-lg hover:border-blue-500 border dark:border-0 p-4 rounded gap-3 transition ease-in-out hover:scale-105">
                <div class="flex justify-center items-center w-12 h-12 bg-blue-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="bi bi-arrow-down-left-square-fill w-5 h-5 text-blue-600" viewBox="0 0 16 16">
                        <path
                            d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm8.096-10.803L6 9.293V6.525a.5.5 0 0 0-1 0V10.5a.5.5 0 0 0 .5.5h3.975a.5.5 0 0 0 0-1H6.707l4.096-4.096a.5.5 0 1 0-.707-.707z" />
                    </svg>
                </div>
                <span class="font-semibold text-xl ">Refund Policy</span>
                <a href="#" class="hover:underline text-[17px] text-slate-400">How to restore your chat history</a>
                <a href="#" class="hover:underline text-[17px] text-slate-400">How to use status</a>
                <a href="#" class="hover:underline text-[17px] text-slate-400">How to manage your notifications</a>
                <a href="#" class="hover:underline text-[17px] text-blue-600">See all</a>
            </div>

            <div class="flex flex-col w-1/4 h-full dark:bg-slate-800 shadow-lg hover:border-blue-500 border dark:border-0 p-4 rounded gap-3 transition ease-in-out hover:scale-105">
                <div class="flex justify-center items-center w-12 h-12 bg-blue-100 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="bi bi-person-circle w-5 h-5 text-blue-600" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </div>
                <span class="font-semibold text-xl ">Account</span>
                <a href="#" class="hover:underline text-[17px] text-slate-400">About WhatsApp Web and Desktop</a>
                <a href="#" class="hover:underline text-[17px] text-slate-400">How to log in or out</a>
                <a href="#" class="hover:underline text-[17px] text-slate-400">How to manage your notifications</a>
                <a href="#" class="hover:underline text-[17px] text-blue-600">See all</a>
            </div>

        </div>
</div></template>