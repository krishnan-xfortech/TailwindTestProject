<template>
    <div class="w-full h-full flex justify-center items-center p-6">
        <div class="w-[60%] h-full">


            <div id="accordion-color" class="w-full h-full" data-accordion="collapse">

                <h2 id="accordion-color-heading-1" class="rounded-t-md"
                    :class="accordion_1 ? 'bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white' : 'text-gray-500 dark:text-gray-400'">
                    <button type="button" @click="accordionFunction('accordion-color-heading-1')"
                        class="flex items-center focus:ring-0 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 hover:bg-blue-100 dark:hover:bg-gray-800 rounded-t-md"
                        data-accordion-target="#accordion-color-body-1" aria-expanded=""
                        :aria-expanded="accordion_1 ? 'true' : 'false'" aria-controls="accordion-color-body-1">
                        <span>General Settings</span>
                        <svg data-accordion-icon class="w-6 h-6 shrink-0"
                            :class="accordion_1 ? 'transform rotate-0 transition ease-in-out' : 'transform rotate-180 transition ease-in-out'"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-1" class="flex flex-col w-full h-[70%] gap-2 pt-2"
                    :class="accordion_1 ? 'border border-gray-200 dark:border-gray-700 border-b-0' : 'hidden'"
                    aria-labelledby="accordion-color-heading-1">
                    <div class="flex w-full h-40 justify-center items-center p-5 relative">
                        <span class="absolute left-3 top-0 m-3 pl-3">Upload avatar</span>
                        <div class="w-[20%] h-full relative">
                            <img class="absolute bottom-0 left-6 flex justify-center items-center 2xl:w-20 2xl:h-20 xl:w-6 xl:h-6 lg:w-5 lg:h-5 rounded-full"
                                src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Avatar-avatars-others-inmotus-design-16.png" />
                        </div>
                        <div class="w-[80%] h-full">
                            <div class="w-full h-[60%] mt-6">
                                <input
                                    class="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-500 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="file_input_help" id="file_input" type="file">
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG
                                    or GIF (MAX. 800x400px).</p>
                            </div>
                            <div class="flex w-full h-[40%] gap-3">
                                <button class="bg-blue-500 hover:bg-blue-700 rounded-lg h-10 p-2 text-sm flex justify-center items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="bi bi-upload w-4 h-4" viewBox="0 0 16 16">
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                    </svg>
                                    Upload new picture
                                </button>
                                <button class="w-20 h-10 bg-transparent text-sm border-2 border-slate-500 rounded-lg">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full h-20 px-4">
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">First Name</label>
                            <input type="text" class="dark:text-white dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none" placeholder="Enter first name" value="Bonnie">
                        </div>
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">Last Name</label>
                            <input type="text" class="dark:text-white dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none" placeholder="Enter first name" value="Green">
                        </div>

                    </div>
                </div>

                <h2 id="accordion-color-heading-2" class=""
                    :class="accordion_2 ? 'bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white' : 'border-b border-gray-200 dark:border-gray-700 rounded-b-md text-gray-500 dark:text-gray-400'">
                    <button type="button" @click="accordionFunction('accordion-color-heading-2')"
                        class="flex items-center focus:ring-0 justify-between p-5 w-full font-medium border rounded-b-md border-gray-200 dark:border-gray-700 border-b-0 text-left hover:bg-blue-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-color-body-2" aria-expanded=""
                        :aria-expanded="accordion_2 ? 'true' : 'false'" aria-controls="accordion-color-body-2">
                        <span>Is there a Figma file available?</span>
                        <svg data-accordion-icon class="w-6 h-6 shrink-0"
                            :class="accordion_2 ? 'transform rotate-0 transition ease-in-out' : 'transform rotate-180 transition ease-in-out'"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </h2>
                <div id="accordion-color-body-2" class="" :class="accordion_2 ? '' : 'hidden'"
                    aria-labelledby="accordion-color-heading-2">
                    <div class="p-5 border border-gray-200 dark:border-gray-700 rounded-b-md">
                        <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using
                            the Figma software so everything you see in the library has a design equivalent in our Figma
                            file.</p>
                        <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/"
                                target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design
                                system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
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
            accordion_1: true,
            accordion_2: false
        }
    },
    methods: {
        accordionFunction(id) {
            if (id == 'accordion-color-heading-1') {
                this.accordion_1 = !this.accordion_1;
                this.accordion_2 = false;
            }
            else if (id == 'accordion-color-heading-2') {
                this.accordion_1 = false;
                this.accordion_2 = !this.accordion_2;
            }
        }
    }
}
</script>