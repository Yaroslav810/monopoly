import {DataProvider} from "./model/DataProvider"
import {SessionStorage} from "./model/SessionStorage"
import {settings} from "../core/Settings"
import {initApp} from "../core/initApp"
import {playerRoutes} from "./modules/player/routes"
import {gameRoutes} from "./modules/game/routes"

const config = {
    port: settings.APP_PORT
}
const routs = [
    playerRoutes,
    gameRoutes
]
const dataProvider = new DataProvider()

dataProvider
    .init()
    .then(() => {
        initApp<DataProvider, SessionStorage>(config, dataProvider, routs)
    })
