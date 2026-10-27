
import * as Crypto from 'expo-crypto';

export const generateJWT = (userPayload: object): string => {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({ ...userPayload, exp: Date.now() + 86400000 }))
    const fakeSignature = Crypto.randomUUID().replace(/-/g, '');
    return `${header}.${payload}.${fakeSignature}`;
};

export const hashPassword = async (password: string): Promise<string> => {
    return await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        password
    );
};

export const getUserStorageKey = (email: string) => {
    // Replaces anything that isn't alphanumeric, a dot, a dash, or an underscore
    const sanitizedIdentifier = email.toLowerCase().replace(/[^a-z0-9.\-_]/g, '');
    return `juru_db_user_${sanitizedIdentifier}`;
}

export const generateId = () => `fk_${Crypto.randomUUID()}`;