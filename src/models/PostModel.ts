export interface IPost {
    id: number,
    title: string,
    content: string,
    user_id: number
}
export interface IPostForm {
    title: string,
    content: string,
    user_id: number
}