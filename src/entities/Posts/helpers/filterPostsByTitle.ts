import { IPostItem } from '../types'

export function filterPostsByTitle(posts: IPostItem[], string: string) {
    return posts.filter(post => post.title.toLowerCase().includes(string.toLowerCase()))
}
