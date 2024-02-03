const Counter = {
  data() {
    return {
      counter: 0,
      unit: {}
    }
  },
  created(){
    this.unit = unitData
  }
}

let app = Vue.createApp(Counter);
app
  .component('doc-comments',{
    props: ['comments'],
    template: '#doc-comments'
  })
  .component('doc-fun-returns',{
    props: ['returns'],
    template: '#doc-fun-returns'
  })
  .component('doc-arg',{
    props: ['index','arg'],
    template: '#doc-arg'
  })
  .component('doc-args',{
    props: ['arguments'],
    template: '#doc-args'
  })
  .component('doc-method',{
    props: ['method'],
    template: '#doc-method',
    computed: {
      cssClass() {        
        return {
          fun: this.method['@type'] == 'Function',
          proc: this.method['@type'] == 'Procedure',
          ctor: this.method['@type'] == 'Constructor',
          dtor: this.method['@type'] == 'Destructor',
          otor: this.method['@type'] == 'Operator',
        }
      }
    }
  })
  .mount('#app');