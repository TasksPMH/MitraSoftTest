import { type FC } from 'react'
import { PostCard } from 'entities/Posts/ui/PostCard'
import classes from './style.module.scss'
import { IPostItem } from 'entities/Posts/types'

interface IPostsListProps {
    posts: IPostItem[]
    showAvatar?: boolean
}

export const PostsList: FC<IPostsListProps> = ({ posts, showAvatar }) => {
    return (
        <div className={ classes.postList }>
            {
                posts && posts.length
                    ? posts.map(post => <PostCard
                        key={ post.id }
                        post={ post }
                        showAvatar={ showAvatar }
                    />)
                    : 'Nothing to display'
            }
        </div>
    )
}
