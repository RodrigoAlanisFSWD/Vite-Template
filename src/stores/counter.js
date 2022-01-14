import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0,
    }),
    actions: {
        incrementCounter(payload) {
            this.counter += payload
        },
        decrementCounter(payload) {
            this.counter -= payload
        }
    }
})