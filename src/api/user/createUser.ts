import { request } from "../request";

export type createUserRequest = {
    nickname: string,
    senha: string,
    nome: string
}
export type createUseResponse = {
    id: string,
    nickname: string,
    nome: string
}

export async function createUser(payload: createUserRequest) {

    const response = await request.post<createUseResponse>('/user', payload)
    return response.data;
}