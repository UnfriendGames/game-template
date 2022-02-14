<template>
  <div v-if="isConnectedInRoom && data && lobby && config">
    <LobbyComponent v-if="showLobby === true" />
    <GameComponent v-else-if="showLobby === false && privateInfos && game" />
  </div>
  <div v-else><Loading /></div>
</template>

<script>
import Vue from 'vue'
import mixins from '@unfriends/front-module/lib/gameMixins'

export default Vue.extend({
  middleware: ['auth'],
  name: 'GamePage',
  mixins: [mixins],
})
</script>
