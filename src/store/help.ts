import { defineStore } from 'pinia'
import { api } from "../configs/BaseService"

import { IHelp } from "../interfaces/IHelp"

interface IHelpState {
  items: IHelp[]
}

export const useHelpStore = defineStore({
  id: 'help',

  state: (): IHelpState => ({
    items: [],
  }),

  getters: {
    getItems: (state) => state.items,
  },

  actions: {
    async fetchHelp() {
      try {
        const response = await api().get('help-tips')
        if (response.status === 200) {
          this.items = response.data
        }
        return response
      } catch (error) {
        return error
      }
    }
  },
})