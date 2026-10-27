import { generateId, generateJWT, getUserStorageKey, hashPassword } from "@/utils/tokenGenerator";
import * as SecureStore from 'expo-secure-store';


const delay = (ms = 1000) => new Promise((res) => setTimeout(res, ms));

export const AuthService = {
    async signup({ email, password, fullName }: { email: string; password: string; fullName: string }) {
        await delay();

        console.log("AuthService is trying to register email:", email)

        const storageKey = getUserStorageKey(email);
        console.log("Generated Storage Key:", storageKey);
        
        const secureStore = await SecureStore.getItemAsync(storageKey);

        if (secureStore) {
            throw new Error("An account with this email address already exists.");
        }

        const hashedPassword = await hashPassword(password);

        const newUser = {
            id: generateId(),
            email,
            password: hashedPassword,
            fullName: fullName.trim(),
            bvnVerified: false,
            createdAt: new Date().toISOString(),
        }

        await SecureStore.setItemAsync(storageKey, JSON.stringify(newUser));
        const token = generateJWT({ sub: newUser.id, email: newUser.email });

        return {
            user: {
                id: newUser.id,
                email: newUser.email,
                fullName: newUser.fullName,
                bvnVerified: false
            },
            token
        };
    },

    async signin(email: string, password: string) {
        await delay();
        const storageKey = getUserStorageKey(email);
        const secureStore = await SecureStore.getItemAsync(storageKey);

        if (!secureStore) {
            throw new Error("No account found with this email address.");
        }

        const storedUser = JSON.parse(secureStore);
        const hashedPassword = await hashPassword(password);

        if (hashedPassword !== storedUser.password) {
            throw new Error("Invalid password.");
        }

        const token = generateJWT({ sub: storedUser.id, email: storedUser.email });

        return {
            user: {
                id: storedUser.id,
                email: storedUser.email,
                fullName: storedUser.fullName,
                bvnVerified: false
            },
            token
        };
    },

    async signout() {
        await delay();
        const storageKey = getUserStorageKey('juru_session_user');
        await SecureStore.deleteItemAsync(storageKey);
    }
}