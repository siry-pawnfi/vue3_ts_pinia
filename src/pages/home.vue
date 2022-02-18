<script setup lang="ts">
import { useUserStore } from "@/store/main"

const mainStore = useUserStore()

  const updateName = () => {
    //1.直接修改
    // mainStore.name = '修改后名字'

    //2.$patch
    // mainStore.$patch({
    //   name: '修改后名字patch'
    // })

    //3.action修改
    mainStore.updateUser('action修改')
    //在store/main.ts中要添加这个updateUser方法
  }
</script>

<template>
  <div>home{{mainStore.name}}</div>
  <div>{{mainStore.nameLength}}</div>
  <button @click="updateName">修改</button>
</template>

<style scoped>

</style>
