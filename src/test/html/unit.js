const Counter = {
  data() {
    return {
      counter: 0,
      unit: {}
    }
  },
  created(){
    //console.log('aaa')
    this.unit = unitData
  }
}

let app = Vue.createApp(Counter);
app.mount('#app');