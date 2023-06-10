import { FC } from 'react'
import classes from './styles.module.scss'

const AboutMe: FC = () => {

    return (
        <div className={ classes.aboutMeWrapper }>
            <h1>Привет!</h1>
            <p>Я фронтенд разработчик.</p>
            <p>Языки: JavaScript, TypeScript</p>
            <p>Сборщики: Webpack, Gulp, Vite</p>
            <p>Фреймворки: React, Vue, Lit</p>
            <p>Unit тесты: jest</p>
            <p>Вспомогательные инструменты: Redux, Redux-Saga, React-Bootstrap, React-Router, EsLint, StyleLint, StoryBook</p>
            <p>Английский язык: на уровне чтения документации</p>
            <p>Пишу валидный читаемый код на TypeSript, настраиваю конфигурацию проекта</p>
            <p>Быстро учусь, неконфликтен</p>
        </div>
    )
}

export default AboutMe
