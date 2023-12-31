import { IUserItem } from 'entities/Users/types'
import { type FC } from 'react'
import { Card } from 'react-bootstrap'

interface IUserCardProps {
    user: IUserItem
}

export const UserCard: FC<IUserCardProps> = ({ user }) => {
    return(
        <Card
            bg='info'
            style={ { width: '100%' } }
        >
            <Card.Header>Информация</Card.Header>
            <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>Username: { user.username }</Card.Text>
                <Card.Text>Email: { user.email }</Card.Text>
                <Card.Text>Company: {user.website}</Card.Text>
                <Card.Text>{user.phone}</Card.Text>
            </Card.Body>
        </Card>
    )
}
