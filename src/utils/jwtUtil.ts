import { sign } from "jsonwebtoken";

const getToken = (Email: string) => {
    
    const secretKey = getSecretKey();

    const token = sign({Email}, secretKey);

    return token;
}

const getSecretKey = () => {
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        throw new Error("Error");
    }

    return secretKey;
};

export default {getToken, getSecretKey};