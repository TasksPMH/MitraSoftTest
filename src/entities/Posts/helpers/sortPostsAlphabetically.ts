import { IPostItem } from '../types'

export function sortPostsAlphabetically(posts: IPostItem[], byAcs = true) {
    const filteredPosts = [...posts].sort((a, b) => a.title.localeCompare(b.title))

    return byAcs
        ? filteredPosts
        : filteredPosts.reverse()
}
