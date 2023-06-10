import { IEntityItem } from 'shared/types'

export interface IPostItem extends IEntityItem {
    body: string
    title: string
    userId: number
}
