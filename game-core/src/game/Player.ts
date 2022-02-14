
import { AbstractPlayer } from "@unfriends/game";

export class Player extends AbstractPlayer {

  private colors = ['red', 'yellow', 'blue']

  getNumberOfColors () {
    return this.colors.length
  }

  getPrivateInfos () {
    return {
      colors: this.colors
    }
  }

  getPublicInfos () {
    return {
      numberOfColors: this.colors.length
    }
  }
}
