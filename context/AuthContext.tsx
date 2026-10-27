
import { AuthService } from "@/services/AuthService";
import * as SecureStore from 'expo-secure-store';
import { createContext, useContext, useEffect, useState } from "react";



export interface User {
    id: string;
    email: string;
    fullName: string;
    bvnVerified: boolean;
    avatarUrl?: string;
    phoneNumber?: string;
}



const TOKEN_KEY = 'juru_session_token';
const USER_KEY = 'juru_session_user';


interface AuthContextType {
    user: User | null;
    token: string | null;
    signup: (email: string, password: string, fullName: string) => Promise<void>;
    signin: (email: string, password: string) => Promise<void>;
    signout: () => Promise<void>
    updateUser: (updates: Partial<User>) => Promise<void>;
    isLoading: boolean;
    isInitializing: boolean;
    isSignedIn: boolean;
    initAuth: () => Promise<void>;

}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isInitializing, setIsInitializing] = useState<boolean>(true);

    const isSignedIn = !!token && !!user;

    useEffect(() => {
        initAuth();
    }, []);

    const initAuth = async () => {
        try {
            const storedToken = await SecureStore.getItemAsync(TOKEN_KEY);
            const storedUser = await SecureStore.getItemAsync(USER_KEY);


            if (storedToken && storedUser) {
                setToken(storedToken);
                setUser(JSON.parse(storedUser));
            }

        } catch (error) {
            throw new Error("FATAL: Failed to restore session");
        } finally {
            setIsInitializing(false);
        }
    }



    const signup = async (email: string, password: string, fullname: string) => {
        setIsLoading(true);

        try {
            const { user, token } = await AuthService.signup({ email, password, fullName: fullname });

            await SecureStore.setItemAsync(TOKEN_KEY, token);
            await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));

            setUser(user);
            setToken(token);
        } catch (error) {
            console.error("Signup failed:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    const signin = async (email: string, password: string) => {
        setIsLoading(true);

        try {
            const { user, token } = await AuthService.signin(email, password);

            await SecureStore.setItemAsync(TOKEN_KEY, token);
            await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));

            setUser(user);
            setToken(token);
        } catch (error) {
            console.error("Signing in failed:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    const signout = async () => {
        setIsLoading(true);
        try {
            await SecureStore.deleteItemAsync(TOKEN_KEY);
            await SecureStore.deleteItemAsync(USER_KEY);
            setUser(null);
            setToken(null)
        } catch (error) {
            console.error("Signing out failed:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    const updateUser = async (updates: Partial<User>) => {
        if (!user) return;
        setIsLoading(true);
        try {
            
            const updatedUser = { ...user, ...updates };

            await SecureStore.setItemAsync(USER_KEY, JSON.stringify(updatedUser));

            const storageKey = `juru_db_user_${updatedUser.email.toLowerCase().replace(/[^a-z0-9.\-_]/g, '')}`;
            const secureStore = await SecureStore.getItemAsync(storageKey);
            if (secureStore) {
                const storedUser = JSON.parse(secureStore);
                await SecureStore.setItemAsync(storageKey, JSON.stringify({ ...storedUser, ...updates }));
            }

            setUser(updatedUser);
        } catch (error) {
            console.error("Failed to update user profile:", error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                signup,
                signin,
                signout,
                updateUser,
                isLoading,
                isInitializing,
                initAuth,
                isSignedIn
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};