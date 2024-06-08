import { request } from "../request"

export type loginUserRequest = {
    nickname: string,
    senha: string
}
export type loginUserResponse = {
    token: string
}

export async function loginUser(payload: loginUserRequest) {
    const response = await request.post<loginUserResponse>('/user/login', payload)
    return response.data;

}