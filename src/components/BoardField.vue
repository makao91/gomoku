<template>
  <button :disabled="disable()" @click="changeColor()" :class="{'is_black': state === 'player_one', 'is_yellow': this.state === 'player_two' }">

  </button>
</template>

<script>
export default {
  name: "BoardField",
  props: {
    horizontally_index: Intl,
    perpendicularly_index: Intl,
    name: String,
    state: String,
    player: Intl,

  },
  methods: {
    changeColor(){
      if (this.player === 1){
        this.state = 'player_one'
      }
      if (this.player === 2){
        this.state = 'player_two'
      }
      this.storeState()
      this.checkForWin()
    },
    storeState(){
        this.$store.commit('setBoardFieldToPlayer', {
          horizontal: this.horizontally_index,
          perpendicularly: this.perpendicularly_index,
          state: this.state
        })

    },
    checkForWin(){
      this.$store.dispatch('checkForWin')
    },
    disable(){
      if (this.state === 'player_one' || this.state === 'player_two'){
        return true
      }
    }
  }
}
</script>

<style scoped>
  button {
    height: 20px;
    background: aliceblue;
  }
  .is_black{
    background: black;
  }
  .is_yellow{
    background: yellow;
  }
</style>
