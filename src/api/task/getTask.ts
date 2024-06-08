import { request } from "../request";

export type GetTaskResponse = {
    id: string
    text: string
    done: boolean
    userId: string
}

export async function getTask() {
    const response = await request.get<GetTaskResponse[]>('/task')
    console.log(response.data)
    return response.data
}