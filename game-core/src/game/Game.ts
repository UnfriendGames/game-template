import { Player } from "./Player";
import { Configuration } from "./config/Configuration";
import { GameState } from "./config/GameState";
import { AbstractGame } from "@unfriends/game";

const defaultConfig: Configuration = {
  colorToFind: 4
}

export class Game extends AbstractGame<Configuration, GameState, Player> {

  private started = false
  private timeSinceStart = Date.now()

  public constructor() {
    super(defaultConfig, Player)
  }

  // Surcharged methods

  protected onInitGame (): void {
    console.log("Game initialized");
    this.started = true
    this.timeSinceStart = Date.now()
  }

  getState () {
    return {
      timeSinceStart: Date.now() - this.timeSinceStart
    }
  }

  stop (data?: any): void {
    console.log("Game stop");
  }

  isGameOver (): boolean {
    return !this.started
  }

  getLeaderboard (): any {
    console.log('getLeaderboard');

    return { winner: this.getPlayers()[0].getData().pseudo }
  }

  generateConfigAccordingToPlayers (count: number): Configuration {
    let colorToFind = 4 + count
    return {
      colorToFind
    }
  }

  // Our custom methods

}