import { PostType } from "./Post/typedef"


export type PostCtxType = {
    data: PostType[] | undefined,
    error: any,
    loading: boolean,
    fetchData: undefined | (() => Promise<void>)
}