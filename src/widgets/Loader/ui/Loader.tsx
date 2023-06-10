import { type FC } from 'react'
import { Spinner } from 'react-bootstrap'
import classes from './styles.module.scss'

export const Loader: FC = () => {
    return (
        <div className={ classes.loader }>
            <Spinner animation='grow' variant='primary' />
        </div>
    )

}
