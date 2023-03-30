<template>
  <div class="flex justify-center items-center w-full h-screen dark:bg-[#151718] bg-white">

    <Sidebar />
    <router-view />

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
