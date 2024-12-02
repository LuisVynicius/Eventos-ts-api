import { sign, verify } from "jsonwebtoken";

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

const verifyToken = (token: string) => {
    const decoded = verify(token, getSecretKey()) as { Email: string };
    return decoded.Email;
};

export default {getToken, getSecretKey, verifyToken};