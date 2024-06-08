import { request } from "../request"
import { User } from "./login";


export async function getUser() {
    const response = await request.get<User>('/user/')
    return response.data;

}