import { IEntityItem } from 'shared/types'

export interface ICommentItem extends IEntityItem {
    postId: number
    name: string
    email: string
    body: string
}
