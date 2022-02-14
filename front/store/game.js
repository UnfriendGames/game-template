export const state = () => ({
  lobbyState: null,
  gameState: null,
  gameConfig: null,
  privateInfos: null,
  token: null,
  data: null,
})

export const mutations = {
  setLobbyState(state, lobbyState) {
    state.lobbyState = lobbyState
  },
  setGameState(state, gameState) {
    state.gameState = gameState
  },
  setGameConfig(state, gameConfig) {
    state.gameConfig = gameConfig
  },
  setPrivateInfos(state, privateInfos) {
    state.privateInfos = privateInfos
  },
  setToken(state, token) {
    state.token = token
  },
  setData(state, data) {
    state.data = data
  },
}
