<template>
    <div id="resetModal" tabindex="-1" aria-hidden="true" data-modal-backdrop="static"
        class="modal hidden fixed top-0 right-0 left-0 z-50 backdrop-blur-md bg-black/20 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-lg max-w-lg h-full md:h-auto">
            <div class="relative p-4 text-center backdrop-blur-md bg-white/30 rounded-lg shadow sm:p-5">
                <button type="button" @click="hideModal"
                    class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="deleteModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <svg class="text-red-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
                <p class="mb-8 text-white">Are you sure you want to reset all the changes?</p>
                <div class="flex justify-center items-center space-x-8">
                    <button data-modal-toggle="deleteModal" type="button" @click="hideModal"
                        class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:z-10 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-700">
                        No, Cancel
                    </button>
                    <button type="button" @click="resetFn"
                        class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none dark:bg-red-500 dark:hover:bg-red-600">
                        Yes, I'm sure
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'flowbite';

export default {
    data() {
        return {
            modal: null
        }
    },
    mounted() {
        this.modal = new Modal(document.getElementById('resetModal'));
    },
    methods: {
        showModal() {
            this.modal.show()
        },
        hideModal() {
            this.modal.hide()
        },
        resetFn() {
            this.$emit('confirm')
            this.modal.hide()
        }
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