import { server } from "./server/server";
import * as dotenv from "dotenv";

const defaultPort = 8080;

dotenv.config()

server.listen(process.env.PORT||defaultPort, () => {
    
});