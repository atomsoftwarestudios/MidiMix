export type Severity = "info" | "warn" | "error";

export class Logger {

   public static level = 9;

   public static info(level: number, message: string, ...args: any[]) {
      if (level <= Logger.level) Logger._log(Date.now(), "info", message, ...args);
   }

   public static warn(message: string, ...args: any[]) {
      Logger._log(Date.now(), "warn", message, ...args);
   }

   public static error(message: string, ...args: any[]) {
      Logger._log(Date.now(), "error", message, ...args);
   }


   private static _log(time: number, severity: Severity, message: string, ...args: any[]) {

      function pre(num: number, len: number) {
         let result = num.toString();
         while (result.length < len) result = "0" + result;
         return result;
      }

      const jargs = args.length > 0 ? args.join(", ") : "";

      const dt = new Date(time);
      const dateTime = `${pre(dt.getFullYear(), 4)}-${pre(dt.getMonth() + 1, 2)}-${pre(dt.getDate(), 2)} ${pre(dt.getHours(), 2)}:${pre(dt.getMinutes(), 2)}:${pre(dt.getSeconds(), 2)}:${pre(dt.getMilliseconds(), 3)}`;

      const msg = `${dateTime} ${severity}: ${message} ${jargs}`;

      switch (severity) {

         case "info":
            console.info(msg);
            break;

         case "warn":
            console.warn(msg);
            break;

         case "error":
            console.error(msg);
            break;

      }

   }

}