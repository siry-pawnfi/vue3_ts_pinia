<script lang="ts" setup>

import { computed } from 'vue'
import { useUserStore } from '@/store/main'
import { storeToRefs } from 'pinia'
//直接获取
const userStore = useUserStore()
//computed获取
const name1 = computed( () => {
  userStore.name
})

//结构获取
const name2 = storeToRefs(userStore)
</script>

<template>
  <div>about{{name1}}{{name2}}</div>
</template>

<style scoped>

</style>
