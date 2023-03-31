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
export default{
  components:{
    Sidebar
  }
}
</script>
