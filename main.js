"use strict"

const { createApp } = Vue

createApp({
  data() {
    return {
        message: 'Vue-hello',
    }
  }
}).mount('#app');