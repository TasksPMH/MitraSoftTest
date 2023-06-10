import { type FC } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { DEFAULT_ERROR_MESSAGE } from 'shared/consts'

interface IErrorPlugProps {
    message: string
}

export const ErrorPlug: FC<IErrorPlugProps> = ( { message = DEFAULT_ERROR_MESSAGE }) => {
    return (
        <Alert variant='danger' className='container'>
            {message}
            <p>Try to reload page</p>
            <Button
                variant='primary'
                onClick={ () => window.location.reload() }
            >
                Reload
            </Button>
        </Alert>
    )
}
