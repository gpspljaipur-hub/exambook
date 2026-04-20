import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as dotenv from "dotenv";
import * as os from "os";

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT ?? 3000;
  await app.listen(port, "0.0.0.0");

  console.log(`Server running on http://localhost:${port}`);

  const interfaces = os.networkInterfaces();
  let ipAddress = "0.0.0.0";
  if (interfaces) {
    for (const name of Object.keys(interfaces)) {
      const ifaceList = interfaces[name];
      if (ifaceList) {
        for (const iface of ifaceList) {
          if (iface && iface.family === "IPv4" && !iface.internal) {
            ipAddress = iface.address;
            break;
          }
        }
        if (ipAddress !== "0.0.0.0") break;
      }
    }
  }

  console.log(
    `Server also accessible on your network at http://${ipAddress}:${port}`,
  );
}
bootstrap();
