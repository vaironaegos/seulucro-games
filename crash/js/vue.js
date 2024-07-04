const app = Vue.createApp({
  data() {
    return {
      game: {
        status: 0
      },
      user: {
        id: '123456',
        wallet: 500,
        bet: 10,
        multiplier: 1.53,
        status: 'livre' // livre, apostou, aguardando
      },
      message: "Hello World!"
    }
  },
  methods: {
    money(value) {
      if(isNaN(value)) return "R$ 0"
      return "R$ " + value.toFixed(2).replace(".", ",");
    }
  }
}).mount('#app')

export default app
