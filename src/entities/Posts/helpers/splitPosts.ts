import { IPostItem } from '../types'

export function splitPosts(posts: IPostItem[], displayedPostsCount: number): IPostItem[][] {
    return [...posts].reduce((resultArray: IPostItem[][], item, index) => {
        const chunkIndex = Math.floor(index/displayedPostsCount)

        if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])
}
