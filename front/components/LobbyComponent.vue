<template>
  <Loading v-if="loading" />
  <div v-else class="h-screen">
    <div class="ml-4 text-4xl">
      <font-awesome-icon
        icon="sign-out-alt"
        class="text-gray-600 hover:text-white cursor-pointer transition duration-150 absolute left-7 top-7"
        @click="leaveRoom()"
      />
    </div>
    <div
      v-if="lobby && config"
      class="flex flex-wrap justify-between items-start h-full"
    >
      <!-- Players -->
      <div class="w-full md:w-1/2 lg:w-2/3 rounded-md">
        <div
          class="flex flex-wrap justify-around p-10 mt-16"
          name="player-list"
        >
          <div
            v-for="user in lobby.users"
            :key="user.id"
            class="bg-gray-100 shadow-md rounded m-2 lg:m-8 icons transition duration-150 relative"
          >
            <!-- Leader Crown -->
            <div class="text-center absolute inset-x-0 -top-4">
              <font-awesome-icon
                v-if="lobby.options.leaderId === user.id"
                class="text-yellow-300 text-3xl shadow-custom"
                icon="crown"
              />
            </div>
            <!-- Skin -->
            <img
              :src="$config.apiUrl + '/api/user/skin/' + user.id"
              class=""
              width="120"
              height="120"
              alt=""
            />
            <!-- Pseudo -->
            <p
              class="text-gray-800 text-center p-1 transition duration-150"
              v-bind:class="{ 'text-gray-900': !user.connected }"
            >
              {{ user.pseudo }}
            </p>
            <!-- Action Icons -->
            <!-- Icons -->
            <div class="text-grey02 p-2 flex justify-around">
              <font-awesome-icon
                v-if="lobby.options.leaderId !== user.id && isLeader"
                class="hideIcon text-gray-500 hover:text-gray-700 cursor-pointer transition duration-150"
                @click="kickPlayer(user.id)"
                icon="sign-out-alt"
              />
              <font-awesome-icon
                v-if="lobby.options.leaderId !== user.id && isLeader"
                class="hideIcon text-gray-500 hover:text-gray-700 cursor-pointer transition duration-150"
                @click="giveLeadership(user.id)"
                icon="crown"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Config -->
      <div
        class="w-full h-full md:w-1/2 lg:w-1/3 mt-5 md:mt-0 bg-gray-100 rounded-md text-center relative"
      >
        <h1 class="text-red-500 my-4 font-bold text-6xl w-full text-center">
          {{ lobby.options.name }}
        </h1>
        <h2 class="text-3xl text-gray-800 font-medium">
          {{ lobby.users.length }} Joueurs
        </h2>

        <hr class="w-full py-2 border-gray-300" />
        <!-- Leader actions -->
        <div class="flex justify-evenly">
          <!-- Private Room -->
          <div
            v-if="isLeader"
            @click="setRoomVisible()"
            class="text-5xl text-gray-600 cursor-pointer"
          >
            <font-awesome-icon
              v-if="lobby.options.private"
              icon="lock"
            ></font-awesome-icon>
            <font-awesome-icon
              v-if="!lobby.options.private"
              icon="lock-open"
            ></font-awesome-icon>
          </div>

          <!-- Start game -->
          <div
            v-if="isLeader"
            class="cursor-pointer bg-yellow-500 text-white font-medium rounded px-10 py-2"
            v-bind:class="{ 'cursor-not-allowed': lobby.users.length < 3 }"
            @click="start()"
          >
            Start
          </div>
        </div>
        <!-- Chat -->
        <div
          class="rounded-sm bg-gray-300 shadow-inner text-left absolute bottom-0 inset-x-0 border border-gray-200"
        >
          <div
            class="p-2 overflow-y-scroll h-40 scrollbar-thin scrollbar-thumb-gray-200 scroll"
          >
            <p
              v-for="(message, i) in lobby.messages"
              :key="i"
              class="text-gray-600"
            >
              {{ message.user.pseudo }}: {{ message.content }}
            </p>
          </div>
          <input
            class="w-full p-2"
            @keydown.enter="sendMessage()"
            maxlength="100"
            type="text"
            v-model="message"
            placeholder="Message"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '@unfriends/front-module/lib/lobbyMixins'
export default {
  mixins: [mixins],
  data() {
    return {
      message: '',
    }
  },
  mounted() {
    console.log(this.lobby)
    console.log(this.config)
    console.log(this.data)
  },
  methods: {
    sendMessage() {
      this.sendMessageToLobby(this.message)
      this.message = ''
    },
    start() {
      this.startGame()
    },
  },
}
</script>

<style>
.hideIcon {
  opacity: 0;
}

.icons:hover .hideIcon {
  opacity: 1;
}

.badge {
  @apply rounded-full shadow-inner;
  width: 50px;
  height: 50px;
  border-radius: 250px;
  font-size: 35px;
  line-height: 50px;
}

.shadow-custom {
  -webkit-filter: drop-shadow(0px 0px 2px rgba(26, 26, 26, 0.774));
  filter: drop-shadow(0px 0px 2px rgba(26, 26, 26, 0.774));
}

.player-list-item {
  transition: all 1s;
}
.player-list-enter {
  max-height: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.player-list-enter-to {
  max-height: 80px;
}
</style>
