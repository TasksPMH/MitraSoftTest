import { ICommentItem } from 'entities/Comments/types'
import { type FC } from 'react'
import { Toast } from 'react-bootstrap'

interface ICommentCardProps {
    comment: ICommentItem
}

export const CommentCard: FC<ICommentCardProps> = ({ comment }) => {
    return (
        <Toast style={ { width: '100%' } }>
            <Toast.Header closeButton={ false }>
                {comment.email}
            </Toast.Header>
            <Toast.Body>
                {comment.body}
            </Toast.Body>
        </Toast>
    )
}
