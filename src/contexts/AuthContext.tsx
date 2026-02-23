import { createContext, type ReactNode, useState } from "react"
import { login } from "../services/Service"
import type { LoginUsuario } from "../models/LoginUsuario"

interface AuthContextProps {
    usuario: LoginUsuario;
    handleLogout(): void;
    handleLogin(usuario: LoginUsuario): Promise<void>;
    isLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {

    // const [usuario, setUsuario] = useState<LoginUsuario>({
    //     id: 0,
    //     nome: "",
    //     usuario: "",
    //     senha: "",
    //     foto: "",
    //     token: ""
    // });

//  {} as LoginUsuario faz o mesmo que o metodo de cima
    const [usuario, setUsuario] = useState<LoginUsuario>({} as LoginUsuario);

    const [isLoading, setIsLoading] = useState(false);

    async function handleLogin(usuarioLogin: LoginUsuario) {
        setIsLoading(true);
        try {
            await login('/usuarios/logar', usuarioLogin, setUsuario);
            alert("O usuário foi autenticado com sucesso!");
            // console.log(usuario);
        } catch (error) {
            alert("Os dados do usuário estão inconsistentes!");
        }
        setIsLoading(false);
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        });
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}