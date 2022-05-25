import { defineStore } from 'pinia'
import { api } from "../configs/BaseService"

import { ITestimonial } from "../interfaces/ITestimonial"

interface ITestimonialState {
  items: ITestimonial[]
}

export const useTestimonialStore = defineStore({
  id: 'testimonial',

  state: (): ITestimonialState => ({
    items: [],
  }),

  getters: {
    getItems: (state) => state.items,
  },

  actions: {
    async fetchTestimonial() {
      try {
        const response = await api().get('testimonial')
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