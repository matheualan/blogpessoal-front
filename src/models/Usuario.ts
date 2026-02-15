import type { Postagem } from "./Postagem";

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    foto: string;
    postagem?: Postagem[] | null;
}