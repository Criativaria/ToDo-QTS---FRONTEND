import { request } from "../request"

export type loginUserRequest = {
    nickname: string,
    senha: string
}
export type loginUserResponse = {
    user: User
}
export type User = {
    nickname: string,
    name: string
}

export async function loginUser(payload: loginUserRequest) {
    const response = await request.post<loginUserResponse>('/user/login', payload)
    return response.data;

}