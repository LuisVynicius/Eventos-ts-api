import { server } from "./server/server";
import * as dotenv from "dotenv";
import jwtUtil from "./utils/jwtUtil";

const defaultPort = 8080;

dotenv.config()

server.listen(process.env.PORT||defaultPort, () => {
    
});