import { defineStore } from 'pinia'


export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: '用户名',
  }),
  getters: {
    nameLength: (state) => state.name.length
  },
  actions: {
    updateUser(data: any) {
      this.name = data
    }
  }
})