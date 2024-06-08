import { request } from "../request"


export type deleteTask = {
    taskId: string
}

export async function DeleteTask(payload: deleteTask) {
    console.log("cheguei aqui")
    const response = await request.put(`/task/${payload.taskId}`)
    return response.data;

}