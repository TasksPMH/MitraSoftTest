import { IPostItem } from 'entities/Posts/types'
import { type FC } from 'react'
import Card from 'react-bootstrap/Card'
import User_avatar from '../assets/account-avatar.svg'
import { Link } from 'react-router-dom'
import classes from './style.module.scss'
import { CommentsBlock } from 'widgets/CommentsBlock'

export interface IPostCardProps {
    post: IPostItem,
    showAvatar?: boolean
}

export const PostCard: FC<IPostCardProps> = ({ post, showAvatar = true }) => {

    return (
        <Card style={ { width: '300px' } }>
            <Card.Header as='h5' className={ classes.header }>
                {
                    showAvatar &&
                        <Link to={ `UserInfo/${post.userId}` } >
                            <User_avatar />
                        </Link>
                }
                {post.title}
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {post.body}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <CommentsBlock postId={ post.id }></CommentsBlock>
            </Card.Footer>
        </Card>
    )
}
