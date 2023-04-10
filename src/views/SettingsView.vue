<template>
    <div class="w-full h-full flex justify-center items-center p-6">
        <div class="w-[60%] h-full">


            <div id="accordion-color" class="w-full h-full" data-accordion="collapse">

                <h2 id="accordion-color-heading-1" class="rounded-t-md"
                    :class="accordion_1 ? 'bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white' : 'text-gray-500 dark:text-gray-400'">
                    <button type="button" @click="accordionFunction('accordion-color-heading-1')"
                        class="flex items-center focus:ring-0 justify-between p-5 w-full h-12 font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 hover:bg-blue-100 dark:hover:bg-gray-800 rounded-t-md"
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
                <div id="accordion-color-body-1" class="flex flex-col w-full h-[75%] gap-2"
                    :class="accordion_1 ? 'border border-gray-200 dark:border-gray-700 border-b-0' : 'hidden'"
                    aria-labelledby="accordion-color-heading-1">
                    <div class="flex w-full h-40 justify-center items-center p-5 relative">
                        <span class="absolute left-3 top-0 m-3">Upload avatar</span>
                        <div class="w-[20%] h-full group flex relative">
                            <div v-show="custom_border"
                                class="absolute flex flex-col justify-center items-center p-2 w-28 h-44 backdrop-blur-md bg-slate-400/30 dark:bg-white/30 z-10 -bottom-14 -left-28 rounded-lg">
                                <div class="w-full h-10 hover:bg-slate-400"
                                    @click="border_color = 'border-2 border-transparent rounded-sm'">rounded-sm</div>
                                <div class="w-full h-10 hover:bg-slate-400"
                                    @click="border_color = 'border-2 border-transparent rounded-md'">rounded-md</div>
                                <div class="w-full h-10 hover:bg-slate-400"
                                    @click="border_color = 'border-2 border-transparent rounded-lg'">rounded-lg</div>
                                <div class="w-full h-10 hover:bg-slate-400"
                                    @click="border_color = 'border-2 border-transparent rounded-xl'">rounded-xl</div>
                                <div class="w-full h-10 hover:bg-slate-400"
                                    @click="border_color = 'border-2 border-transparent rounded-2xl'">rounded-2xl</div>
                                <div class="w-full h-10 hover:bg-slate-400"
                                    @click="border_color = 'border-2 border-transparent rounded-3xl'">rounded-3xl</div>
                                <div class="w-full h-10 hover:bg-slate-400"
                                    @click="border_color = 'border-2 border-transparent rounded-full'">rounded-full</div>
                            </div>
                            <img @click="custom_border = !custom_border" data-tooltip-target="tooltip-jese"
                                class="absolute bg-blue-500 bottom-0 left-4 flex justify-center items-center 2xl:w-20 2xl:h-20 xl:w-6 xl:h-6 lg:w-5 lg:h-5"
                                :class="border_color"
                                src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Avatar-avatars-others-inmotus-design-16.png" />
                            <span class="group-hover:opacity-100 transition-opacity bg-gray-500 px-1 w-full text-sm dark:text-white rounded-md absolute left-1/2 
                                    -translate-x-10 translate-y-28 opacity-0 m-4">Click on avatar to change border</span>
                        </div>
                        <div class="w-[80%] h-full">
                            <div class="w-full h-[60%] mt-6">
                                <input
                                    class="block w-full h-10 file:h-full file:w-30 file:mr-3 file:text-sm file:font-medium file:rounded-l-lg file:border-0 dark:hover:file:bg-slate-500 dark:file:bg-slate-600 file:bg-black hover:file:bg-slate-800 file:text-white hover:file:cursor-pointer text-sm font-medium text-gray-900 border-l-0 border-2 border-gray-300 rounded-lg cursor-pointer bg-slate-200 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    aria-describedby="file_input_help" id="file_input" type="file">
                                <p class="mt-1 text-xs text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG
                                    or GIF (MAX. 800x400px).</p>
                            </div>
                            <div class="flex w-full h-[40%] gap-3">
                                <button
                                    class="bg-blue-600 hover:bg-blue-700 rounded-lg h-10 p-2 text-sm text-white flex justify-center items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-upload w-4 h-4"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                    </svg>
                                    Upload new picture
                                </button>
                                <button
                                    class="w-20 h-10 bg-transparent font-medium text-sm border-2 border-slate-200 dark:border-slate-600 hover:bg-slate-100 hover:dark:bg-slate-700 hover:text-blue-500 hover:dark:text-white dark:text-slate-400 rounded-lg">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full h-20 px-4">
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">First Name</label>
                            <input type="text"
                                class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                placeholder="John" value="Bonnie">
                        </div>
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">Last Name</label>
                            <input type="text"
                                class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                placeholder="Wick" value="Green">
                        </div>
                    </div>
                    <div class="flex w-full h-20 px-4">
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">Email</label>
                            <input type="text"
                                class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                placeholder="john@example.com" value="bonnie.green@company.com">
                        </div>
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">Email Status
                                <button data-tooltip-target="tooltip-default" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        class="bi bi-question-circle-fill w-[14px] h-[14px] text-slate-400"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                    </svg>
                                </button>
                                <div id="tooltip-default" role="tooltip"
                                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                    Tooltip content
                                    <div class="tooltip-arrow" data-popper-arrow></div>
                                </div>
                            </label>
                            <select v-model="email_verified"
                                class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none">
                                <option value="0">Not verified</option>
                                <option value="1">Verified</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex w-full h-20 px-4">
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">Job Title</label>
                            <input type="text"
                                class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                placeholder="Ex. Laravel Developer" value="Back-end software engineer">
                        </div>
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">Languages</label>
                            <input type="text"
                                class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                placeholder="Ex. English, Spanish" value="English, German">
                        </div>
                    </div>
                    <div class="flex w-full h-20 px-4">
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">Password</label>
                            <input type="password" v-model="password"
                                class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                placeholder="•••••••••">
                        </div>
                        <div class="flex flex-col w-1/2 gap-2 px-2">
                            <label class="dark:text-white">Confirm Password</label>
                            <input type="password" v-model="confirm_password"
                                class="dark:text-white border-2 password border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                placeholder="•••••••••">
                        </div>
                    </div>
                    <div class="flex w-full h-20 px-4">
                        <div class="flex flex-col w-full gap-2 px-2">
                            <label class="dark:text-white">Staus</label>

                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" v-model="toggle" class="sr-only peer">
                                <div
                                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                </div>
                                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {{ toggle ? 'Active' : 'Inactive' }}
                                </span>
                            </label>

                        </div>
                    </div>

                </div>

                <h2 id="accordion-color-heading-2" class=""
                    :class="accordion_2 ? 'bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white' : 'text-gray-500 dark:text-gray-400'">
                    <button type="button" @click="accordionFunction('accordion-color-heading-2')"
                        class="flex items-center focus:ring-0 justify-between p-5 w-full h-12 font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left hover:bg-blue-100 dark:hover:bg-gray-800"
                        data-accordion-target="#accordion-color-body-2" aria-expanded=""
                        :aria-expanded="accordion_2 ? 'true' : 'false'" aria-controls="accordion-color-body-2">
                        <span>Additional Information</span>
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
                    <div class="p-5 border border-gray-200 dark:border-gray-700">
                        <div class="flex w-full h-20">
                            <div class="flex flex-col w-full gap-2 px-2">
                                <label class="dark:text-white">Skills</label>
                                <input type="text"
                                    class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                    placeholder="Ex. Figma, HTML, Javascript" value="Tailwind CSS, Flowbite, React">
                            </div>
                        </div>
                        <div class="flex w-full h-20">
                            <div class="flex flex-col w-1/2 gap-2 px-2">
                                <label class="dark:text-white">Phone Number</label>
                                <input type="number"
                                    class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                    placeholder="+919497062354" value="9497062354">
                            </div>
                            <div class="flex flex-col w-1/2 gap-2 px-2">
                                <label class="dark:text-white">Timezone</label>
                                <input type="text"
                                    class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                    placeholder="GMT+2" value="GMT+3">
                            </div>
                        </div>
                        <div class="flex w-full h-20">
                            <div class="flex flex-col w-1/2 gap-2 px-2">
                                <label class="dark:text-white">Linkedin URL</label>
                                <input type="text"
                                    class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                    placeholder="https://www.linkedin.com/in/example/"
                                    value="https://www.linkedin.com/in/bonniegreen/">
                            </div>
                            <div class="flex flex-col w-1/2 gap-2 px-2">
                                <label class="dark:text-white">Facebook</label>
                                <input type="text"
                                    class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                    placeholder="https://www.facebook.com/example"
                                    value="https://www.facebook.com/bonniegreen">
                            </div>
                        </div>
                        <div class="flex w-full h-20">
                            <div class="flex flex-col w-1/2 gap-2 px-2">
                                <label class="dark:text-white">Twitter</label>
                                <input type="text"
                                    class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                    placeholder="https://twitter.com/example" value="https://twitter.com/bonniegreen">
                            </div>
                            <div class="flex flex-col w-1/2 gap-2 px-2">
                                <label class="dark:text-white">Personal Website</label>
                                <input type="text"
                                    class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none"
                                    placeholder="https://website.com" value="https://flowbite.com">
                            </div>
                        </div>
                        <div class="flex w-full h-20">
                            <div class="flex flex-col w-full gap-2 px-2">
                                <label class="dark:text-white">Country</label>
                                <select v-model="country"
                                    class="dark:text-white border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-10 pl-3 rounded-lg focus:outline-none">
                                    <option value="0">United States</option>
                                    <option value="1">Australia</option>
                                    <option value="2">United Kingdom</option>
                                    <option value="3">Italy</option>
                                    <option value="4">Germany</option>
                                    <option value="5">Spain</option>
                                    <option value="6">France</option>
                                    <option value="7">Canada</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex w-full h-32">
                            <div class="flex flex-col w-1/2 gap-2 px-2">
                                <label class="dark:text-white">Address</label>
                                <textarea type="text"
                                    class="dark:text-white overflow-y-auto border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-[70%] pl-3 rounded-lg focus:outline-none"
                                    placeholder="Write your address...">92 Milles Drive, Newark, NJ 07123</textarea>
                            </div>
                            <div class="flex flex-col w-1/2 gap-2 px-2">
                                <label class="dark:text-white">Biography</label>
                                <textarea type="text"
                                    class="dark:text-white overflow-y-auto border-2 border-gray-300 dark:border-gray-500 bg-slate-200 dark:bg-slate-600 w-full h-[70%] pl-3 rounded-lg focus:outline-none"
                                    placeholder="Write your biography...">Hello, I'm Helene Engels, USA Designer, Creating things that stand out, Featured by Adobe, Figma, Webflow and others, Daily design tips & resources, Exploring Web3.
                                                                                                                                                                                                                                    </textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="flex justify-start items-center w-full h-16 border border-gray-200 dark:border-gray-700 rounded-b-md pl-6 gap-3">
                    <button @click="showModal"
                        class="w-32 h-10 font-semibold focus:outline-none bg-blue-600 hover:bg-blue-700 rounded-lg text-white">Update
                        user</button>
                    <button @click="$refs.delete_modal_ref.showModal()"
                        class="bg-transparent border-2 font-semibold border-red-500 text-red-500 hover:text-white hover:bg-red-500 rounded-lg h-10 p-2 flex justify-center items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-reply-fill w-5 h-5"
                            viewBox="0 0 16 16">
                            <path
                                d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                        </svg>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    </div>

    <Teleport to="#modals">
        <div id="modalEl" tabindex="-1" aria-hidden="true" data-modal-backdrop="static"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div class="relative w-96 h-96 max-w-2xl md:h-auto">
                <div
                    class="relative flex flex-col justify-center items-center rounded-lg shadow backdrop-blur-md bg-white/20">
                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mt-3">
                        <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium text-slate-200">Successful!</h3>
                    <div class="mt-5 text-center">
                        <p class="text-sm text-slate-200">User settings updated successfully!</p>
                    </div>
                    <div class="items-center px-4 py-3">
                        <button @click="hideModal()"
                            class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-green-300">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <ResetModal ref="delete_modal_ref" @confirm="showModal" />
    </Teleport>
</template>

<script>
import { Modal } from 'flowbite';
import ResetModal from '../components/ResetModal.vue';

export default {
    data() {
        return {
            accordion_1: true,
            accordion_2: false,
            email_verified: 0,
            password: "password",
            confirm_password: "password",
            toggle: false,
            country: 0,
            modal: null,
            custom_border: false,
            border_color: ''
        };
    },
    mounted() {
        this.modal = new Modal(document.getElementById("modalEl"));
    },
    methods: {
        accordionFunction(id) {
            if (id == "accordion-color-heading-1") {
                this.accordion_1 = !this.accordion_1;
                this.accordion_2 = false;
            }
            else if (id == "accordion-color-heading-2") {
                this.accordion_1 = false;
                this.accordion_2 = !this.accordion_2;
            }
        },
        showModal() {
            this.modal.show();
            console.log(this.modal);
        },
        hideModal() {
            this.modal.hide();
        },
    },
    components: { ResetModal }
}
</script>