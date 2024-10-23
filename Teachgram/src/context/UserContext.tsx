import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getUser } from "../utils/functions";
import { User } from "../utils/interfaces";

interface UserContextProps {
    user: User | null;
    loading: boolean;
    error: string | null;
    fetchUserInfo: () => Promise<void>;
	updateUserInfo: (updatedData: Partial<User>) => Promise<void>;
}

const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    const fetchUserInfo = async () => {
        try {
            setLoading(true);
            const userCredentials = getUser();
            if (!userCredentials) return;
            
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userCredentials.id}`, {
                headers: {
                    "Authorization": `${userCredentials.token}`,
                    "Content-Type": "application/json"
                },
                method: "GET"
            });

            const userData = await response.json();
            setUser(userData);
            return userData;
        } catch (e) {
            setError('Ocorreu um erro durante a requisição');
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

	const updateUserInfo = async (updatedData: Partial<User>) => {
        try {
            setLoading(true);
            const userCredentials = getUser();
            if (!userCredentials || !user) return;

            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userCredentials.id}`, {
                headers: {
                    "Authorization": `${userCredentials.token}`,
                    "Content-Type": "application/json"
                },
                method: "PUT",
                body: JSON.stringify({
                    ...user,
                    ...updatedData,
                    updatedAt: new Date().toISOString()
                }),
            });
			
            if (!response.ok) throw new Error('Falha ao atualizar usuário');
            const updatedUser = await response.json();
            setUser(updatedUser); 
        } catch (e) {
            setError('Ocorreu um erro ao atualizar os dados');
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, error, fetchUserInfo, updateUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(UserContext);

    if (!context) throw new Error("O UserContext deve estar encapsulado em um UserProvider");

    return context;
}
