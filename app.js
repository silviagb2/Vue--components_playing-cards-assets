// Create a Vue application
const app = Vue.createApp({
  data(){
    return{
      numbers:["2","3","4","5","6","7","8","9","10","ace","jack","king","queen"],
      aces:["C","D","H","S"],
      acesNames:["clubs","diamonds","hearts","spades"],
      cards:[]
    }
  },
  created(){
    for (number in numbers){
      for (ace in aces){
        this.cards.push({
          value: numbers[number] + aces[ace],
          image: `/png/${numbers[number]}_of_${acesNames[ace]}.png`
        })
      }
    }
  }
})

// Define a new global component called button-counter
app.component('poker-card', {
  data() {
    return {
        cardActive : true,
    }
  },
  props:['imgCard','value'],
  methods:{
    flipCard(){
        this.cardActive = !this.cardActive
        console.log(this.imgCard)
        console.log(this.value)
    }
  },
  template: 
`
<img v-if="cardActive" src="/png/back.png" @click="flipCard()" width="200">
<img v-else v-bind:src="'/png/'+this.imgCard" @click="flipCard()" width="200">
`
})

app.mount('#app')