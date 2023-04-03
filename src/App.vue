<template>
  <div class="flex justify-center items-center w-full h-screen dark:bg-[#151718] bg-white">

    <Sidebar />
    <div class="w-[80%] h-full dark:bg-[#151718] dark:text-white">
      <router-view />
    </div>

  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>

<style>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

textarea {
  resize: none;
}

/* Styling the scrollbar */
::-webkit-scrollbar {
  width: 8px;
  /* background: lemonchiffon; */
}

/* Styling the track of the scrollbar */
/* ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
} */

/* Styling the thumb (the draggable scrolling handle) */
::-webkit-scrollbar-thumb {
  background: slategrey;
  border-radius: 10px;
}

/* The thumb on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: red;
} */
</style>