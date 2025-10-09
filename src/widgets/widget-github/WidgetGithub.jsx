import { useState } from 'react'
import classes from './WidgetGithub.module.css'

function generateData() {
    function getRandomActivity() {
        const randomNumber = Math.random() * 20
        return Math.round(randomNumber)
    }

    const data = []

    for (let i = 0; i < 256; i++) {
        data.push({
            id: i + 1,
            activity: getRandomActivity()
        })
    }

    return data
}

export default function WidgetGithub(props) {
    const [activity, setActivity] = useState(generateData)

    return (
        <article className={`widget ${classes["widget--github"]}`}>
            <main className={classes.main}>
                {activity.map(day => {
                    const opacity = day.activity / 20
                    return <span key={day.id} id={day.id} className={classes.activity} style={{ opacity }}></span>
                })}
            </main>
            <footer className={classes.footer}>
                <span>50</span>
                <h2>days of coding</h2>
            </footer>
        </article>
    )
}
