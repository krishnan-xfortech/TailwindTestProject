<template>
    <div class="w-full h-full flex justify-center items-center p-6">
        <div class="card flex flex-col w-full h-full rounded-lg">
            <div class="flex justify-center items-center mt-2">
                <span class="text-3xl font-semibold dark:text-white">Welcome to search</span>
            </div>
            <div class="flex justify-center items-center gap-10 pt-10">
                <input type="text"
                    class="w-[70%] h-12 border-2 border-blue-300 dark:border-blue-500/50 rounded-lg focus:ring-0 focus:outline-none bg-transparent dark:caret-white p-5 placeholder:text-slate-800 placeholder:dark:text-slate-400"
                    placeholder="Enter search keywords">
                <button @click="showModal"
                    class="bg-blue-600 hover:bg-blue-700 w-36 h-10 flex justify-center items-center rounded-lg gap-2 text-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-funnel-fill w-4 h-4"
                        viewBox="0 0 16 16">
                        <path
                            d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
                    </svg>
                    <span class="font-semibold">Filter Search</span>
                </button>
            </div>
        </div>
    </div>

    <Teleport to="#modals">
        <div id="filterModal" tabindex="-1" aria-hidden="true" data-modal-backdrop="static"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full h-full p-4 overflow-x-hidden overflow-y-auto backdrop-blur-md bg-black/20">
            <div class="relative w-1/2 h-full flex justify-center items-center">
                <div
                    class="relative flex flex-col items-center w-full h-full rounded-lg shadow backdrop-blur-lg dark:bg-blue-500/20 bg-white/50 p-5 gap-3">
                    <div class="flex justify-between items-center w-full -mt-2">
                        <span class="text-slate-500 dark:text-slate-100 text-xl font-semibold drop-shadow-lg">Advanced
                            Filter</span>
                        <button @click="hideModal"
                            class="text-slate-500 dark:text-slate-400 dark:hover:text-red-600 hover:text-red-600 transition ease-in-out hover:rotate-90">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x w-8 h-8"
                                viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex justify-center items-center w-full gap-5 drop-shadow-lg">
                        <div class="w-1/4">
                            <label for="minmax-range" class="block mb-2 font-medium text-gray-900 dark:text-white">Min
                                Age</label>
                            <input id="minmax-range" type="range" min="18" max="45" v-model="min_range"
                                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>
                        <div class="w-1/4">
                            <label for="minmax-range" class="block mb-2 font-medium text-gray-900 dark:text-white">Max
                                Age</label>
                            <input id="minmax-range" type="range" min="18" max="45" v-model="max_range"
                                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>
                        <div class="w-1/4">
                            <label for="minmax-range" class="block mb-2 font-medium text-gray-900 dark:text-white">Min
                                experience</label>
                            <input id="minmax-range" type="range" min="0" max="10" v-model="min_exp"
                                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>
                        <div class="w-1/4">
                            <label for="minmax-range" class="block mb-2 font-medium text-gray-900 dark:text-white">Max
                                experience</label>
                            <input id="minmax-range" type="range" min="0" max="10" v-model="max_exp"
                                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                        </div>
                    </div>

                    <div class="flex justify-center items-center w-full gap-5 text-gray-900 dark:text-white drop-shadow-lg">
                        <div class="w-1/4">
                            <label for="minmax-range" class="block mb-2 font-medium">From</label>
                            <input id="minmax-range" type="number" v-model="min_range"
                                class="w-full h-12 bg-gray-200 rounded-lg border dark:border-gray-600 border-gray-100 focus:border-gray-100 focus:ring-0 dark:focus:border-gray-600 dark:bg-gray-700">
                        </div>
                        <div class="w-1/4">
                            <label for="minmax-range" class="block mb-2 font-medium">To</label>
                            <input id="minmax-range" type="number" v-model="max_range"
                                class="w-full h-12 bg-gray-200 rounded-lg border dark:border-gray-600 border-gray-100 focus:border-gray-100 focus:ring-0 dark:focus:border-gray-600 dark:bg-gray-700">
                        </div>
                        <div class="w-1/4">
                            <label for="minmax-range" class="block mb-2 font-medium">From</label>
                            <input id="minmax-range" type="number" v-model="min_exp"
                                class="w-full h-12 bg-gray-200 rounded-lg border dark:border-gray-600 border-gray-100 focus:border-gray-100 focus:ring-0 dark:focus:border-gray-600 dark:bg-gray-700">
                        </div>
                        <div class="w-1/4">
                            <label for="minmax-range" class="block mb-2 font-medium">To</label>
                            <input id="minmax-range" type="number" v-model="max_exp"
                                class="w-full h-12 bg-gray-200 rounded-lg border dark:border-gray-600 border-gray-100 focus:border-gray-100 focus:ring-0 dark:focus:border-gray-600 dark:bg-gray-700">
                        </div>
                    </div>

                    <div class="flex flex-col w-full gap-2">
                        <h3 class="font-medium text-gray-900 dark:text-white">Account type</h3>
                        <ul
                            class="items-center w-full text-sm font-medium text-gray-900 bg-gray-200 border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-300 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-license" type="radio" value="1" v-model="account_type"
                                        name="list-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-0 dark:ring-offset-gray-700 dark:bg-gray-600">
                                    <label for="horizontal-list-radio-license"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-300 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-id" type="radio" value="2" v-model="account_type"
                                        name="list-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-0 dark:ring-offset-gray-700 dark:bg-gray-600">
                                    <label for="horizontal-list-radio-id"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Administrator</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-300 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-millitary" type="radio" value="3"
                                        v-model="account_type" name="list-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-0 dark:ring-offset-gray-700 dark:bg-gray-600">
                                    <label for="horizontal-list-radio-millitary"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Moderator</label>
                                </div>
                            </li>
                            <li class="w-full dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="horizontal-list-radio-passport" type="radio" value="4" v-model="account_type"
                                        name="list-radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-0 dark:ring-offset-gray-700 dark:bg-gray-600">
                                    <label for="horizontal-list-radio-passport"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Viewer</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="flex flex-col w-full gap-2 drop-shadow-lg">
                        <span class="font-medium text-gray-900 dark:text-white">Job title</span>
                        <div class="flex w-full text-blue-500 gap-3 mb-1">
                            <div class="w-1/3">
                                <button
                                    class="border-2 border-blue-600 hover:bg-blue-600 hover:text-white ring-0 w-full rounded-lg h-10 px-2"
                                    @click="btnSelect(1)"
                                    :class="button_selected[1] ? 'bg-blue-700 text-white' : ''">Frontend
                                    Developer</button>
                            </div>
                            <div class="w-1/3">
                                <button
                                    class="border-2 border-blue-600 hover:bg-blue-600 hover:text-white ring-0 w-full rounded-lg h-10 px-2"
                                    @click="btnSelect(2)" :class="button_selected[2] ? 'bg-blue-700 text-white' : ''">UI/UX
                                    Designer</button>
                            </div>
                            <div class="w-1/3">
                                <button
                                    class="border-2 border-blue-600 hover:bg-blue-600 hover:text-white ring-0 w-full rounded-lg h-10 px-2"
                                    @click="btnSelect(3)" :class="button_selected[3] ? 'bg-blue-700 text-white' : ''">React
                                    Developer</button>
                            </div>
                        </div>
                        <div class="flex w-full text-blue-500 gap-3">
                            <div class="w-1/3">
                                <button
                                    class="border-2 border-blue-600 hover:bg-blue-600 hover:text-white ring-0 w-full rounded-lg h-10 px-2"
                                    @click="btnSelect(4)" :class="button_selected[4] ? 'bg-blue-700 text-white' : ''">PHP
                                    Developer</button>
                            </div>
                            <div class="w-1/3">
                                <button
                                    class="border-2 border-blue-600 hover:bg-blue-600 hover:text-white ring-0 w-full rounded-lg h-10 px-2"
                                    @click="btnSelect(5)"
                                    :class="button_selected[5] ? 'bg-blue-700 text-white' : ''">Engineer</button>
                            </div>
                            <div class="w-1/3">
                                <button
                                    class="border-2 border-blue-600 hover:bg-blue-600 hover:text-white ring-0 w-full rounded-lg h-10 px-2"
                                    @click="btnSelect(6)"
                                    :class="button_selected[6] ? 'bg-blue-700 text-white' : ''">Marketing</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full h-full gap-2 drop-shadow-lg">
                        <span class="font-medium text-gray-900 dark:text-white">Properties</span>
                        <div v-for="(item, index) in property"
                            class="flex justify-center w-full h-auto dark:text-slate-200 text-slate-800 gap-3 p-4 dark:bg-gray-700 bg-gray-200 rounded-lg">
                            <div class="w-1/3">
                                <select
                                    class="w-full h-12 flex justify-center items-center border border-gray-500 bg-gray-100 rounded-lg focus:ring-0 dark:bg-gray-600">
                                    <option value="" disabled>Country</option>
                                    <option value="1">United States</option>
                                    <option value="2">Canada</option>
                                    <option value="3">France</option>
                                    <option value="4">Germany</option>
                                </select>
                            </div>
                            <div class="w-1/3">
                                <select
                                    class="w-full h-12 flex justify-center items-center border border-gray-500 bg-gray-100 rounded-lg focus:ring-0 dark:bg-gray-600">
                                    <option value="" disabled>State</option>
                                    <option value="1">Californa</option>
                                    <option value="2">Oregon</option>
                                    <option value="3">New York</option>
                                    <option value="4">Florida</option>
                                </select>
                            </div>
                            <div class="w-1/3">
                                <select
                                    class="w-full h-12 flex justify-center items-center border border-gray-500 bg-gray-100 rounded-lg focus:ring-0 dark:bg-gray-600">
                                    <option value="" disabled>City</option>
                                    <option value="1">Sacramento</option>
                                    <option value="2">Los Angeles</option>
                                    <option value="3">San Francisco</option>
                                    <option value="4">San Diego</option>
                                </select>
                            </div>
                            <button @click="removeRroperty(index)">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    class="bi bi-trash-fill w-5 h-5 ml-1 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-500 transition ease-in-out hover:scale-110"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                </svg>
                            </button>
                        </div>
                        <button class="flex items-center w-32 h-10 hover:underline text-blue-600 -mt-3"
                            @click="addProperty()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x w-5 h-5 rotate-45"
                                viewBox="0 0 16 16">
                                <path
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                            <span>Add Property</span>
                        </button>
                    </div>

                    <div class="absolute bottom-0 flex items-center w-full h-20 gap-3 p-5">
                        <button class="w-40 h-10 text-white bg-blue-600 hover:bg-blue-700 border-0 ring-0 rounded-lg">Show
                            32 Results</button>
                        <button @click="resetFn"
                            class="w-20 h-10 dark:text-slate-400 text-black bg-slate-100 hover:bg-gray-200 hover:text-blue-500 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 border border-slate-400 dark:border-gray-500 ring-0 rounded-lg">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script>
import { Modal } from 'flowbite';

export default {
    data() {
        return {
            modal: null,
            min_range: 0,
            max_range: 0,
            min_exp: 0,
            max_exp: 0,
            account_type: 0,
            button_selected: [],
            property: []
        }
    },
    mounted() {
        this.modal = new Modal(document.getElementById("filterModal"));
        this.resetFn();
    },
    methods: {
        showModal() {
            this.modal.show();
        },
        hideModal() {
            this.modal.hide();
        },
        btnSelect(value) {
            this.button_selected[value] = !this.button_selected[value];
        },
        addProperty() {
            this.property.length++;
        },
        removeRroperty(index) {
            this.property.splice(index, 1);
        },
        resetFn() {
            this.min_range = 22;
            this.max_range = 30;
            this.min_exp = 2;
            this.max_exp = 7;
            this.account_type = 1;
            for (let index = 1; index < 7; index++) {
                this.button_selected[index] = false;
            }
            this.property.length = 2;
        }
    }
}
</script>