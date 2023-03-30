<template>
    <div class="flex w-[80%] h-full dark:bg-[#151718] p-6">
        <div class="flex w-full h-full dark:bg-[#2f3334] bg-slate-100 rounded-xl drop-shadow-lg shadow-lg">
            <div class="flex flex-col w-[65%]">
                <div class="flex justify-between items-center w-full h-14 px-10 shadow-lg">
                    <span class="font-semibold text-xl dark:text-white drop-shadow-md">Cute Superman</span>
                    <div class="flex gap-10">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 dark:text-slate-500 transition ease-in-out hover:scale-110">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 dark:text-slate-500 transition ease-in-out hover:scale-110">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                        </button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6 dark:text-slate-500 transition ease-in-out hover:scale-110">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <hr class="dark:bg-slate-600 bg-slate-300 w-full h-[1px] border-0">

                <div class="flex flex-col w-full h-[calc(100%-5rem)] p-6">
                    <div class="w-[95%] h-[85%] rounded-3xl dark:bg-black bg-slate-300 p-6 mx-5 relative">
                        <div class="bg-center bg-cover w-full h-[27rem] rounded-3xl"
                            style="background-image: url('/assets/new.png')">

                        </div>
                        <div
                            class="flex w-full h-[calc(100%-27rem)] justify-start items-start gap-3 py-2 mb-3 text-xs dark:text-white">
                            <button
                                class="w-20 h-6 flex justify-between items-center dark:bg-white bg-slate-400 rounded-md px-3 font-semibold pb-1 dark:text-black text-white transition ease-in-out hover:scale-95">Export
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" class="w-4 h-4 dark:text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                            </button>
                            <button
                                class="w-32 h-6 flex justify-between items-center dark:bg-[#343839] bg-white rounded-md px-3 font-semibold pb-1 transition ease-in-out hover:scale-95">Create
                                variation
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <button
                                class="w-20 h-6 flex justify-between items-center dark:bg-[#343839] bg-white rounded-md px-3 font-semibold pb-1 transition ease-in-out hover:scale-95">Adjust
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                </svg>
                            </button>
                            <button
                                class="w-24 h-6 flex justify-between items-center dark:bg-[#343839] bg-white rounded-md px-3 font-semibold pb-1 transition ease-in-out hover:scale-95">Enhance
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </button>
                        </div>

                        <div class="flex justify-between items-center absolute -mt-5 w-[96%] h-[60px]">
                            <div class="w-15 h-15 p-2 bg-blue-500 rounded-lg flex items-center justify-center">
                                <img class="w-15 h-15"
                                    src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/30/000000/external-brain-anatomy-vitaliy-gorbachev-blue-vitaly-gorbachev-1.png" />
                            </div>
                            <div class="flex items-center gap-2 mt-10">
                                <span class="text-sm dark:text-slate-400 text-slate-600">Just now</span>
                                <button
                                    class="w-10 h-6 flex justify-center dark:bg-black bg-slate-300 rounded-lg dark:text-white text-sm transition ease-in-out hover:scale-105">Copy</button>
                                <button
                                    class="w-36 h-6 flex justify-center dark:bg-black bg-slate-300 rounded-lg dark:text-white text-sm transition ease-in-out hover:scale-105">Regenerate
                                    response</button>
                                <div
                                    class="flex justify-center items-center w-9 h-6 dark:bg-black bg-slate-300 rounded-lg dark:text-white transition ease-in-out hover:scale-110">
                                    <img class="w-4 h-4" src="https://img.icons8.com/emoji/48/000000/star-struck.png" />
                                    <img class="w-4 h-4" src="https://img.icons8.com/emoji/48/000000/frowning-face.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full h-[15%]">
                        <div
                            class="flex justify-between items-center w-full h-14 border-2 dark:border-slate-600 border-slate-300 rounded-lg mt-16 mb-1 px-4">
                            <div class="flex gap-2 w-full">
                                <img src="https://img.icons8.com/sf-regular-filled/48/A6A6A6/add.png"
                                    class="w-10 h-10 cursor-pointer transition ease-in-out hover:scale-110" />
                                <input type="text" placeholder="Type '/' for commands"
                                    class="w-full text-slate-500 dark:caret-white focus:outline-none bg-transparent transition ease-in-out hover:fade placeholder:text-sm placeholder:font-semibold placeholder:text-slate-500">
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-soundwave w-8 h-8 text-slate-500 cursor-pointer transition ease-in-out hover:scale-110"
                                viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-[35%] h-full relative ">
                <div class="absolute w-[0.5px] h-full dark:bg-slate-600 bg-slate-300 border-0"></div>
                <div class="flex h-14 gap-10 justify-end items-center px-10 shadow-lg">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 dark:text-slate-500 transition ease-in-out hover:scale-110">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                    <button class="relative transition ease-in-out hover:scale-110">
                        <img class="w-9 h-9 rounded-full"
                            src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Avatar-avatars-others-inmotus-design-16.png" />
                        <span class="bottom-0 left-7 absolute  w-3 h-3 bg-green-400 border-2 dark:border-gray-800 rounded-full">
                        </span>
                    </button>
                    <button
                        class="dark:bg-[#FEFEFE] bg-slate-300 h-8 w-20 px-2 rounded-lg font-semibold transition ease-in-out hover:scale-110">Share
                    </button>
                </div>

                <hr class="dark:bg-slate-600 bg-slate-300 w-full h-[1px] border-0">

                <div class="flex flex-col w-full h-[calc(100%-5rem)] p-2 2xl:gap-1 xl:gap-2 lg:gap-3">
                    <div
                        class="flex 2xl:w-[80%] 2xl:h-[5%] xl:w-[78%] xl:h-[4%] lg:w-[76%] lg:h-[3%] justify-between py-2 my-2 px-4 mx-9">
                        <div class="flex gap-2">
                            <span class="dark:text-slate-500 font-semibold 2xl:text-base xl:text-sm lg:text-xs">Chat
                                history</span>
                            <span
                                class="flex justify-center items-center pb-1 dark:bg-black dark:text-slate-400 bg-slate-400 text-slate-800 2xl:w-14 2xl:h-6 xl:w-12 xl:h-5 lg:w-11 lg:h-4 rounded-lg 2xl:text-sm xl:text-xs lg:text-[10px] font-semibold">28/100</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor"
                            class="2xl:w-5 2xl:h-5 xl:w-4 xl:h-4 lg:w-4 lg:h-4 dark:text-slate-500 cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </div>

                    <div
                        class="flex 2xl:w-[80%] 2xl:h-[33%] xl:w-[78%] xl:h-[32%] lg:w-[76%] lg:h-[30%] rounded-lg dark:bg-slate-600 bg-slate-300 mx-10 p-2
                                                                                          transition ease-in-out hover:scale-95 dark:hover:bg-slate-600 hover:bg-slate-300">
                        <div class="flex flex-col">
                            <div class="w-6 h-6 border-2 border-slate-500 rounded-lg relative" @click="tick = !tick">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" v-show="tick"
                                    class="bi bi-check-lg absolute w-6 h-6 dark:text-white" viewBox="0 0 16 16">
                                    <path
                                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex flex-col items-start w-full h-full gap-2 px-4">
                            <span class="w-full h-5 font-semibold dark:text-white 2xl:text-base xl:text-sm lg:text-xs">Cute
                                Superman</span>
                            <span class="w-full h-full 2xl:text-xs xl:text-[9px] lg:text-[8px] dark:text-slate-400">Write
                                code (HTML, CSS and JS) for a
                                simple...</span>
                            <img src="/assets/cute-1.png" class="w-40 h-32 rounded-lg drop-shadow-lg" />
                            <div class="flex w-full h-full justify-between items-center">
                                <img class="2xl:w-7 2xl:h-7 xl:w-6 xl:h-6 lg:w-5 lg:h-5 rounded-full"
                                    src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Avatar-avatars-others-inmotus-design-16.png" />
                                <span class="2xl:text-xs xl:text-[12px] lg:text-[10px] dark:text-slate-400">Just
                                    now</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex 2xl:w-[80%] 2xl:h-[33%] xl:w-[78%] xl:h-[32%] lg:w-[76%] lg:h-[30%] rounded-lg mx-10 p-2 
                                                                                          transition ease-in-out hover:scale-95 dark:hover:bg-slate-600 hover:bg-slate-300">
                        <div class="flex flex-col">
                            <div class="w-6 h-6 border-2 border-slate-500 rounded-lg"></div>
                        </div>
                        <div class="flex flex-col items-start w-full h-full gap-2 px-4">
                            <span
                                class="w-full h-5 font-semibold dark:text-white 2xl:text-base xl:text-sm lg:text-xs">Cartoon
                                Captian America</span>
                            <span class="w-full h-full 2xl:text-xs xl:text-[9px] lg:text-[8px] dark:text-slate-400">Write
                                code (HTML, CSS and JS) for a
                                simple...</span>
                            <img src="/assets/captian-1.png" class="w-40 h-32 rounded-lg drop-shadow-lg" />
                            <div class="flex w-full h-full justify-between items-center">
                                <img class="2xl:w-7 2xl:h-7 xl:w-6 xl:h-6 lg:w-5 lg:h-5 rounded-full"
                                    src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Avatar-avatars-others-inmotus-design-16.png" />
                                <span class="2xl:text-xs xl:text-[12px] lg:text-[10px] dark:text-slate-400">Just
                                    now</span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex 2xl:w-[80%] 2xl:h-[11%] xl:w-[78%] xl:h-[9%] lg:w-[76%] lg:h-[7%] rounded-lg mx-10 p-2 transition ease-in-out hover:scale-95">
                        <div class="flex flex-col">
                            <div class="w-6 h-6 border-2 border-slate-500 rounded-lg"></div>
                        </div>
                        <div class="flex flex-col items-start w-full h-full gap-2 px-4">
                            <span class="w-full h-5 font-semibold dark:text-white 2xl:text-base xl:text-sm lg:text-xs">Photo
                                retouch</span>
                            <span
                                class="w-full h-full 2xl:text-xs xl:text-[9px] lg:text-[8px] dark:text-slate-400">Photography
                                shoot of anime Travelers couple...</span>
                            <div class="flex w-full justify-between items-center">
                                <div class="flex mb-5 -space-x-4">
                                    <img class="2xl:w-10 2xl:h-10 xl:w-9 xl:h-9 lg:w-8 lg:h-8 rounded-full"
                                        src="https://img.icons8.com/color/48/000000/user-female-circle--v1.png" />
                                    <img class="2xl:w-10 2xl:h-10 xl:w-9 xl:h-9 lg:w-8 lg:h-8 rounded-full"
                                        src="https://img.icons8.com/color/48/000000/user-female-circle--v1.png" />
                                    <img class="2xl:w-10 2xl:h-10 xl:w-9 xl:h-9 lg:w-8 lg:h-8 rounded-full"
                                        src="https://img.icons8.com/color/48/000000/user-female-circle--v1.png" />
                                </div>
                                <span class="2xl:text-xs xl:text-[12px] lg:text-[10px] dark:text-slate-400">Just now</span>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex 2xl:w-[85%] 2xl:h-[13%] xl:w-[83%] xl:h-[11%] lg:w-[81%] lg:h-[10%] rounded-lg mx-10 p-4 2xl:mt-4 xl:mt-6 lg:mt-8">
                        <button
                            class="bg-blue-600 w-full h-full flex justify-center items-center text-white 2xl:text-sm xl:text-sm lg:text-xs rounded-lg mt-5 transition ease-in-out hover:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus w-6 h-6"
                                viewBox="0 0 16 16">
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            New chat</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tick: false
        }
    }
}
</script>