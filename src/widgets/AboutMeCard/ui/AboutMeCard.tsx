import { type FC } from 'react'
import { Card } from 'react-bootstrap'

export const AboutMeCard: FC = () => {
    return (
        <Card style={ { width: '18rem' } }>
            <Card.Img variant='top' src='https://avatars.githubusercontent.com/u/29529658?s=400&u=fefacdcedf1968b0e9007ee7921ea2aebba99a67&v=4' />
            <Card.Body>
                <Card.Title>Фан Минь Хунг</Card.Title>
                <Card.Text>
                Frontend Web Developer любит создавать новые вещи и делиться ими с другими. В настоящее время я работаю над ReactJS, NextJS, NodeJS, ExpressJS, MongoDB, Docker и т. д.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
