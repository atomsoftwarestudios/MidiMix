import * as path from "path";
import * as fs from "fs"
import { Logger } from "./log/Logger";

const configFileName = "config.json";

export class Config<T> {

   private _configFilePath: string;

   public data: T = {} as T;


   constructor(configFilePath: string) {

      this._configFilePath = path.join(configFilePath, configFileName);
      Logger.info(0, `Config file: ${this._configFilePath}`);

   }


   public init(): void {

      if (!fs.existsSync(this._configFilePath)) {
         this.update();
         return;
      }

      try {

         const config = fs.readFileSync(this._configFilePath, "utf8");
         this.data = JSON.parse(config);

      } catch (e) {

         const msg = e instanceof Error ? e.message : typeof e === "string" ? e : "Unknown error";
         Logger.error(msg);

      }

   }


   public update(): void {

      const data = JSON.stringify(this.data, null, 3);
      fs.writeFileSync(this._configFilePath, data);

   }


}