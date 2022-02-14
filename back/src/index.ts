import { ServerSocket } from "@unfriends/back";
import { MyGameSocket } from "./Game";
require('dotenv').config();

const PORT = parseInt(process.env.SOCKET_PORT || '4001')
const options = {
    origin: [process.env.APP_URL || "http://localhost:4000"],
    debug: process.env.ENV === 'dev',
}

let server = new ServerSocket(MyGameSocket, PORT, options)
