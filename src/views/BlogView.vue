<template>
    <div class="flex w-full h-full p-6 overflow-y-auto">
        <div class="flex w-[70%] h-full">
            <div class="flex flex-col w-full h-full pr-12 gap-4">
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <a href="#"
                                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                                    </path>
                                </svg>
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <a href="#"
                                    class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Profile</a>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Blog</span>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div class="flex w-full h-10 items-center gap-3">
                    <button
                        class="flex justify-center rounded-[4px] w-24 h-6 pb-4 bg-blue-200 hover:bg-blue-300 text-blue-800 text-sm font-semibold">Technology</button>
                    <button
                        class="flex justify-center rounded-[4px] w-16 h-6 pb-4 bg-blue-200 hover:bg-blue-300 text-blue-800 text-sm font-semibold">Design</button>
                    <button
                        class="flex justify-center rounded-[4px] w-28 h-6 pb-4 bg-blue-200 hover:bg-blue-300 text-blue-800 text-sm font-semibold">Programming</button>
                </div>

                <div class="flex items-center w-full h-16 text-4xl font-bold dark:text-white">
                    Prototyping from A to Z: best practices for successful prototypes
                </div>

                <div
                    class="flex justify-between items-center w-full h-24 border-t border-b dark:border-gray-700 mt-2 text-sm font-semibold">
                    <span class="text-gray-400">By
                        <button class="hover:underline dark:text-white text-gray-800">Jese Leos</button>
                        in
                        <button class="hover:underline dark:text-white text-gray-800">Design</button>
                        on FEB. 8, 2022 AT 4:52PM PDT
                    </span>
                    <button class="flex items-center hover:underline text-blue-500 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="bi bi-chat-square-text-fill w-[13px] h-[13px] mt-1" viewBox="0 0 16 16">
                            <path
                                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                        </svg>4 Comments
                    </button>
                </div>

                <div class="flex flex-col w-full h-full text-lg dark:text-gray-400 gap-6">
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam rem amet et id harum ullam
                        facere nemo eveniet aperiam inventore repudiandae, esse distinctio modi beatae nostrum nulla
                        accusamus reprehenderit voluptate.</span>
                    <span>
                        But then I found a <button class="text-blue-500 hover:underline">component library based on Tailwind
                            CSS called Flowbite</button>. It comes with the most commonly used UI components, such as
                        buttons, navigation bars, cards, form elements, and more which are conveniently built with the
                        utility classes from Tailwind CSS.</span>
                    <img class="ml-40 w-[28rem] h-[16rem] rounded-sm drop-shadow-lg"
                        src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png">
                    <span class="flex justify-center -mt-2 text-gray-500">Digital art by Anonymous</span>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam rem amet et id harum ullam
                        facere nemo eveniet aperiam inventore repudiandae, esse distinctio modi beatae nostrum nulla
                        accusamus reprehenderit voluptate.</span>
                    <span>
                        But then I found a <button class="text-blue-500 hover:underline">component library based on Tailwind
                            CSS called Flowbite</button>. It comes with the most commonly used UI components, such as
                        buttons, navigation bars, cards, form elements, and more which are conveniently built with the
                        utility classes from Tailwind CSS.</span>
                </div>

            </div>
        </div>
        <div class="flex flex-col w-[30%] h-full gap-6">
            <div
                class="flex flex-col w-full h-[63%] backdrop-blur-md dark:bg-white/10 rounded-lg border-t dark:border-0 shadow-md px-6">
                <div class="flex items-center w-full h-14 uppercase font-bold dark:text-white">latest news</div>
                <div class="flex items-center w-full h-16 py-10 border-t dark:border-gray-500 font-bold cursor-pointer">
                    <img class="w-12 h-12 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png">
                    <span class="ml-5 dark:text-white hover:underline">SaaS can help speed up Cybersecurity projects</span>
                </div>
                <div class="flex items-center w-full h-16 py-10 border-t dark:border-gray-500 font-bold cursor-pointer">
                    <img class="w-12 h-12 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png">
                    <span class="ml-5 dark:text-white hover:underline">Crunching large datasets made fast: Flowbite
                        Library</span>
                </div>
                <div class="flex items-center w-full h-16 py-10 border-t dark:border-gray-500 font-bold cursor-pointer">
                    <img class="w-12 h-12 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-3.png">
                    <span class="ml-5 dark:text-white hover:underline">Here’s how to make a react app with Flowbite
                        Blocks</span>
                </div>
                <div class="flex items-center w-full h-16 py-10 border-t dark:border-gray-500 font-bold cursor-pointer">
                    <img class="w-12 h-12 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-1.png">
                    <span class="ml-5 dark:text-white hover:underline">AI meets IoT: What is the artificial
                        intelligence</span>
                </div>
                <div class="flex items-center w-full h-16 py-10 border-t dark:border-gray-500 font-bold cursor-pointer">
                    <img class="w-12 h-12 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/image-2.png">
                    <span class="ml-5 dark:text-white hover:underline">How to create a basic application with
                        Flowbite</span>
                </div>
            </div>
            <div
                class="flex flex-col w-full h-[63%] backdrop-blur-md dark:bg-white/10 rounded-lg border-t dark:border-0 shadow-md p-6 gap-4">
                <div class="flex items-center w-full h-10 font-bold dark:text-white">Get the best of Flowbite News delivered
                    to your inbox</div>
                <div class="flex items-center w-full h-10 dark:text-white/50">Subscribe our newsletter for latest world
                    news. Let's stay updated!</div>

                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            class="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon"
                        class="bg-gray-50 border border-gray-300  focus:ring-0 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Your name">
                </div>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                    </div>
                    <input type="text" id="email-address-icon"
                        class="bg-gray-50 border border-gray-300  focus:ring-0 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com">
                </div>
                <button class="w-full h-10 rounded-lg bg-blue-600 hover:bg-blue-700">Subscribe</button>
            </div>
            <div
                class="flex flex-col w-full h-[20rem] border backdrop-blur-md dark:bg-white/10 rounded-lg border-t dark:border-0 shadow-md px-6">
                <div class="flex items-center w-full h-16 font-semibold text-sm dark:text-white uppercase">recent comments</div>
                <div class="flex items-center w-full h-16 py-10 border-t dark:border-gray-600">
                    <span class="dark:text-gray-400 font-light">Bonnie Green on
                        <span class="dark:text-white hover:underline cursor-pointer italic font-medium">5 Ways SaaS Can Help Speed Up
                            Cybersecurity Implementation</span>
                    </span>
                </div>
                <div class="flex items-center w-full h-16 py-10 border-t dark:border-gray-600">
                    <span class="dark:text-gray-400 font-light">Bonnie Green on
                        <span class="dark:text-white hover:underline cursor-pointer italic font-medium">5 Ways SaaS Can Help Speed Up
                            Cybersecurity Implementation</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>