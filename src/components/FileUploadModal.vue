<template>
    <div id="fileUploadModal" tabindex="-1" aria-hidden="true" data-modal-backdrop="static"
        class="modal hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[90%]">
        <div class="relative p-4 h-full mt-5 w-full flex justify-center items-start">
            <div class="relative p-4 w-1/2 h-[40%] bg-slate-300 dark:bg-slate-500 rounded-lg sm:p-5">
                <button type="button" @click="hideModal"
                    class="absolute top-0 right-0 bg-transparent p-1 dark:text-slate-300 inline-flex items-center">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>

                <label for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-700 border-dashed rounded-lg cursor-pointer dark:border-gray-300 bg-slate-300 dark:bg-slate-500">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-900 dark:text-gray-300" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                            </path>
                        </svg>
                        <p class="mb-2 text-sm text-gray-700 dark:text-gray-100"><span class="font-semibold">Click to
                                upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-700 dark:text-gray-100">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>

            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'flowbite'

export default {
    data() {
        return {
            modal: null
        }
    },
    mounted() {
        this.modal = new Modal(document.getElementById('fileUploadModal'));
    },
    methods: {
        showModal() {
            this.modal.show()
        },
        hideModal() {
            this.modal.hide()
        },
    }
}
</script>

<style>
.modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}
</style>