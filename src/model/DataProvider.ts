import { Sequelize } from "sequelize";
import { initNativeAmericanProvider } from "./NativeAmerican";
import { Logger } from "../../core/Logger";
import { settings } from "../../core/Settings";
import { initGameProvider } from "./Game";
import { initStaticObjectProvider } from "./StaticObject"
import { initCityProvider } from "./City";
import { initCapitalTeamProvider } from "./CapitalTeam";
import { initCityProductProvider } from "./CityProduct";
import { initGuardRailwayCompanyProvider } from "./GuardRailwayCompany";
import { initRailwayProvider } from "./Railway";
import { initRiverProvider } from "./River";
import { initWarehouseProvider } from "./Warehouse";
import { initPlayerProvider } from "./Player";
import { initArmyProvider } from "./Army";

export class DataProvider {
    public async init() {
        return this._sequelize.sync({ force: false })
    }

    private _sequelize = new Sequelize(
        settings.DB_NAME, 
        settings.DB_USER, 
        settings.DB_PASSWORD, 
        {
            dialect: 'mysql',
            host: settings.DB_HOST,
            port: settings.DB_PORT,
            logging: msg => Logger.log(msg),
            define: {
                timestamps: false,
                freezeTableName: true
            }
        })

    readonly game = initGameProvider(this._sequelize)
    readonly nativeAmerican = initNativeAmericanProvider(this._sequelize)
    readonly staticObject = initStaticObjectProvider(this._sequelize)
    readonly army = initArmyProvider(this._sequelize)
    readonly city = initCityProvider(this._sequelize)
    readonly rout = initCityProvider(this._sequelize)
    readonly capitalState = initCapitalTeamProvider(this._sequelize)
    readonly guardRailwayCompany = initGuardRailwayCompanyProvider(this._sequelize)
    readonly railway = initRailwayProvider(this._sequelize)
    readonly warehouse = initWarehouseProvider(this._sequelize)
    readonly CityProduct = initCityProductProvider(this._sequelize)
    readonly River = initRiverProvider(this._sequelize)
    readonly player = initPlayerProvider(this._sequelize)
}
