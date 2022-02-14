import { GameSocket, User } from "@unfriends/back";
import { Game, Player } from "@unfriends/game_core";


export class MyGameSocket extends GameSocket<any> {


    // Events
    onCreate (): void {
        this.setGame(Game)
        this.getRoom().changeOptions({ maxPlayer: 5 })
        // this.changeRefreshStateInterval(200)
    }

    registerGameListeners (user: User): void {
        user.on("stop-game", (reason: string) => {
            this.stopGame({ reason: `custom: ${reason}`, player: user.getData().pseudo })
        });
    }
    registerLobbyListeners (user: User): void {
    }

    onUserCountChanged () {
        this.game.setConfiguration(this.game.generateConfigAccordingToPlayers(this.getRoom().getUsers().length))
    }

    userLeftInGame (user: User) {
        this.stopGame({ reason: 'A user left the game', player: user.getData().pseudo })
    }

    canStart () {
        return this.getUsers().length >= 1
    }

    onStart (): void {
        this.setReconnectDelay(10)
    }

}