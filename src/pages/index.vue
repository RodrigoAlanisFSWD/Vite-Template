<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue-demi";
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();

const payload = ref(0)

const { counter } = storeToRefs(counterStore);
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-2/4 h-2/4 bg-white flex flex-col justify-center items-center">
      <h1 class="text-3xl font-bold">Counter Control</h1>
      <h2 class="my-5 font-bold text-5xl">
        {{ counter }}
      </h2>
      <input
        type="number"
        name="payload"
        placeholder="payload"
        v-model="payload"
        class="w-2/4 shadow-md p-3 text-bg-gray-800 placeholder-current mt-5"
      />
      <div class="flex flex-col items-center w-full">
        <v-button
          color="indigo-600"
          text="Increment"
          class="w-2/4 mt-4"
          @click="() => counterStore.incrementCounter(payload)"
        />
        <v-button
          color="rose-600"
          text="Decrement"
          class="w-2/4 mt-4"
          @click="() => counterStore.decrementCounter(payload)"
        />
      </div>
    </div>
  </div>
</template>

<route>
{
  name: "index",
  meta: {
    layout: "default"
  }
}
</route>