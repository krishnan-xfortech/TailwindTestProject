<template>
    <div class="flex flex-col w-[20%] h-full">
        <div class="flex justify-between items-end w-full h-20 dark:text-white pt-12 p-4">
            <div class="flex justify-start w-full">
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/6C7375/external-brain-anatomy-vitaliy-gorbachev-blue-vitaly-gorbachev-1.png"
                    class="w-8 h-8" />
                <span
                    class="font-semibold text-2xl px-5 drop-shadow-md transition ease-in-out cursor-default text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-400 to-purple-700"
                    :class="dark ? 'glow-animation' : 'glow-animation-white'">Brainwave</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                class="bi bi-layout-sidebar-inset-reverse w-5 h-5 mb-1 dark:text-slate-300 text-slate-500"
                viewBox="0 0 16 16">
                <path
                    d="M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12z" />
                <path d="M13 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4z" />
            </svg>
        </div>
        <div class="flex flex-col items-center w-full h-[calc(100%-5rem)] dark:text-white text-black p-4 gap-1 relative">
            <router-link to="/"
                class="flex justify-start items-center drop-shadow-md hover:bg-slate-300 dark:hover:bg-[#242627] w-full h-12 rounded-lg pl-4 transition ease-in-out hover:scale-110"
                :class="this.$route.name == 'dashboard' ? 'dark:bg-active bg-slate-300' : ''">
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/228BE6/external-chat-chat-flatart-icons-outline-flatarticons-3.png"
                    class="w-6 h-6" />
                <span class="pl-4 drop-shadow-md">Chats</span>
            </router-link>
            <button
                class="flex justify-start items-center drop-shadow-md w-full h-12 rounded-lg pl-4 transition ease-in-out hover:scale-110 hover:bg-slate-300 dark:hover:bg-[#242627]">
                <img src="https://img.icons8.com/ios-glyphs/30/40C057/search--v1.png" class="w-6 h-6" />
                <span class="pl-4 drop-shadow-md">Search</span>
                <div
                    class="flex justify-center items-center drop-shadow-md 2xl:w-10 2xl:h-6 xl:w-9 xl:h-5 lg:w-8 lg:h-4 rounded-lg dark:bg-slate-800 bg-slate-400 2xl:text-sm xl:text-sm lg:text-xs gap-1 dark:text-slate-400 text-slate-800 p-1 2xl:ml-28 xl:ml-20 lg:ml-16">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-command w-3 h-3 "
                        viewBox="0 0 16 16">
                        <path
                            d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4zm1-1V3.5A1.5 1.5 0 1 1 12.5 5H11zm0 6h1.5a1.5 1.5 0 1 1-1.5 1.5V11zm-6 0v1.5A1.5 1.5 0 1 1 3.5 11H5z" />
                    </svg>
                    F
                </div>
            </button>
            <router-link to="/manage"
                class="flex justify-start items-center drop-shadow-md w-full h-12 rounded-lg pl-4 transition ease-in-out hover:scale-110 hover:bg-slate-300 dark:hover:bg-[#242627]"
                :class="this.$route.name == 'manage' ? 'dark:bg-active bg-slate-300' : ''">
                <img src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/24/986684/external-credit-card-online-shop-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto-2.png"
                    class="w-6 h-6" />
                <span class="pl-4 drop-shadow-md">Manage Subscription</span>
            </router-link>
            <router-link to="/faq-page"
                class="flex justify-start items-center w-full drop-shadow-md h-12 rounded-lg pl-4 transition ease-in-out hover:scale-110 hover:bg-slate-300 dark:hover:bg-[#242627]"
                :class="this.$route.name == 'faq-page' ? 'dark:bg-active bg-slate-300' : ''">
                <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/AF4B20/external-scan-basic-user-interface-anggara-basic-outline-anggara-putra.png"
                    class="w-6 h-6" />
                <span class="pl-4 drop-shadow-md">Updates & FAQ</span>
            </router-link>
            <router-link to="/settings-page"
                class="flex justify-start items-center drop-shadow-md w-full h-12 rounded-lg pl-4 transition ease-in-out hover:scale-110 hover:bg-slate-300 dark:hover:bg-[#242627]">
                <img src="https://img.icons8.com/sf-regular/24/7950F2/settings.png" class="w-7 h-7" />
                <span class="pl-4 drop-shadow-md">Settings</span>
            </router-link>

            <hr class="dark:bg-slate-700 bg-slate-300 w-full h-px my-2 border-0">

            <button class="flex justify-start items-center w-full h-12 rounded-lg pl-4" @click="chat_list = !chat_list">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 dark:text-slate-600 text-slate-800 pt-1 drop-shadow-md"
                    :class="chat_list ? 'transform rotate-0 transition ease-in-out' : 'transform rotate-180 transition ease-in-out'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                <span class="pl-4 dark:text-slate-500 text-slate-800 drop-shadow-md">Chat list</span>
            </button>
            <div class="flex flex-col items-center w-full h-48 gap-1 transition ease-in-out" v-show="chat_list">
                <button
                    class="flex justify-between items-center w-full drop-shadow-md h-12 rounded-lg px-4 transition ease-in-out hover:scale-110 hover:bg-slate-300 dark:hover:bg-[#242627]">
                    <div class="flex justify-start w-full">
                        <div class="box w-5 h-5 rounded-md bg-slate-600"></div>
                        <span class="pl-4 dark:text-white text-black drop-shadow-md">Welcome</span>
                    </div>
                    <div
                        class="flex justify-center items-center w-7 h-6 drop-shadow-md rounded-lg dark:bg-slate-600 dark:text-slate-400 bg-slate-400 text-slate-800 p-1">
                        48
                    </div>
                </button>
                <button
                    class="flex justify-between items-center drop-shadow-md bg-slate-300 dark:bg-[#242627] w-full h-12 rounded-lg px-4 transition ease-in-out hover:scale-110 hover:bg-slate-300 dark:hover:bg-[#242627]">
                    <div class="flex justify-start w-full">
                        <div class="box w-5 h-5 rounded-md bg-purple-600"></div>
                        <span class="pl-4 dark:text-white text-black drop-shadow-md">UI8 Production</span>
                    </div>
                    <div
                        class="flex justify-center items-center w-7 h-6 drop-shadow-md rounded-lg dark:bg-slate-600 dark:text-slate-400 bg-slate-400 text-slate-800 p-1">
                        16
                    </div>
                </button>
                <button
                    class="flex justify-between items-center drop-shadow-md w-full h-12 rounded-lg px-4 transition ease-in-out hover:scale-110 hover:bg-slate-300 dark:hover:bg-[#242627]">
                    <div class="flex justify-start w-full">
                        <div class="box w-5 h-5 rounded-md bg-blue-400"></div>
                        <span class="pl-4 dark:text-white text-black drop-shadow-md">Favorites</span>
                    </div>
                    <div
                        class="flex justify-center items-center w-7 h-6 drop-shadow-md rounded-lg dark:bg-slate-600 dark:text-slate-400 bg-slate-400 text-slate-800 p-1">
                        8
                    </div>
                </button>
                <button
                    class="flex justify-between items-center drop-shadow-md w-full h-12 rounded-lg px-4 transition ease-in-out hover:scale-110 hover:bg-slate-300 dark:hover:bg-[#242627]">
                    <div class="flex justify-start w-full">
                        <div class="box w-5 h-5 rounded-md bg-orange-600"></div>
                        <span class="pl-4 dark:text-white text-black drop-shadow-md">Archived</span>
                    </div>
                    <div
                        class="flex justify-center items-center w-8 h-6 drop-shadow-md rounded-lg dark:bg-slate-600 dark:text-slate-400 bg-slate-400 text-slate-800 p-1">
                        128
                    </div>
                </button>
            </div>

            <div class="flex justify-start items-center w-full h-12 rounded-lg pl-4 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="w-6 h-6 text-slate-500 drop-shadow-md">
                    <path fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                        clip-rule="evenodd" />
                </svg>
                <span class="pl-4 drop-shadow-md">New list</span>
            </div>

            <div
                class="absolute bottom-0 flex justify-center items-center drop-shadow-md w-[85%] h-12 p-1 rounded-lg mb-[23px] text-white dark:bg-[#242627] bg-slate-300">
                <button @click="darkModeSwitch"
                    class="w-1/2 h-full flex justify-center items-center drop-shadow-md rounded-lg cursor-pointer gap-1 transition ease-in-out hover:scale-95"
                    :class="!dark ? 'bg-slate-400' : ''">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 text-white">
                        <path
                            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                    <span class="drop-shadow-md">Light</span>
                </button>
                <button @click="darkModeSwitch"
                    class="w-1/2 h-full flex justify-center items-center drop-shadow-md rounded-lg cursor-pointer gap-1 transition ease-in-out hover:scale-95"
                    :class="dark ? 'bg-slate-600' : ''">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                    <span class="drop-shadow-md">Dark</span>
                </button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chat_list: true,
            dark: true
        }
    },
    methods: {
        darkModeSwitch() {
            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                    // console.log(localStorage.getItem('color-theme'));
                    this.dark = true;
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                    this.dark = false;
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                    this.dark = false;
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                    this.dark = true;
                }
            }
        }
    }
}

</script>

<style>
.glow-animation:hover {
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
}

.glow-animation-white:hover {
    color: #919191;
    text-shadow: 0 0 10px #919191, 0 0 20px #919191, 0 0 40px #919191;
}
</style>