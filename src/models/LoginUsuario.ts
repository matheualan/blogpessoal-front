// LoginUsuario são os dados que chegam de resposta quando fazemos a requisição
export interface LoginUsuario {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token: string;
}