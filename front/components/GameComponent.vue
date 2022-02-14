<template>
  <div v-if="!stopData">
    <h1>In game !</h1>
    <p>Time since start: {{ game.timeSinceStart }}</p>
    <div @click="stopGame">STOP</div>
  </div>
  <div v-else>
    {{ stopData }}
  </div>
</template>

<script>
import mixins from '@unfriends/front-module/lib/inGameMixins'
export default {
  mixins: [mixins],
  data() {
    return {
      stopData: null,
    }
  },
  mounted() {
    console.log(this.game)
    console.log(this.config)
    console.log(this.privateInfos)
  },
  methods: {
    onStop(data) {
      console.log('Stop data:', data)
      this.stopData = data
      setTimeout(() => {
        this.$parent.showLobby = true
      }, 8000)
    },
    stopGame() {
      this.$emitToServer('stop-game', "J'ai cliqué sur stop")
    },
  },
  computed: {
    isMyTurn: function () {
      return this.data.id === this.game.playerTurn
    },
  },
}
</script>
