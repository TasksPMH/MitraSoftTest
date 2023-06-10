import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Burger_menu from '../assets/menu_burger.svg'
import classes from './style.module.scss'
import { NavLink } from 'react-router-dom'
import { AboutMeCard } from 'widgets/AboutMeCard'

export const AppHeader = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className={ classes.header }>
            <button
                type='button'
                onClick={ handleShow }
                className={ classes.burgerMenuButton }
            >
                <Burger_menu />
            </button>

            <Offcanvas show={ show } onHide={ handleClose }>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body className={ classes.sidebarContainer }>
                    <NavLink
                        className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? classes.active : '' }
                        to=''
                    >
                        Список постов
                    </NavLink>
                    <NavLink
                        className={ ({ isActive, isPending }) => isPending ? 'pending' : isActive ? classes.active : '' }
                        to='AboutMe'
                    >
                        Обо мне
                    </NavLink>

                    <AboutMeCard />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
