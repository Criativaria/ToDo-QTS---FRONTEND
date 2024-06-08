import { request } from "../request";

export type CreateTaskRequest = {
    text: string;
}
export type CreateTaskResponse = {
    id: string,
    text: string
}

export async function createTask(payload: CreateTaskRequest) {

    const response = await request.post<CreateTaskResponse>('/task', payload)

    return response.data;
}