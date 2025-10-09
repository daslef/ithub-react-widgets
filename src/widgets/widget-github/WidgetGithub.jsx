import { useState } from 'react'
import classes from './WidgetGithub.module.css'

function generateData() {
    function getRandomBoolean() {
        const randomNumber = Math.random()
        return randomNumber >= 0.8
    }

    const data = []

    for (let i = 0; i < 88; i++) {
        data.push({
            id: i + 1,
            isBad: getRandomBoolean()
        })
    }

    return data
}

export default function WidgetGithub(props) {
    function changeIsBad(event) {
        const baddaysCopy = [...baddays]
        const dayId = Number(event.target.id)
        const dayObject = baddaysCopy.find(day => day.id === dayId)
        dayObject.isBad = !dayObject.isBad
        
        setBaddays(baddaysCopy)
    }

    const [baddays, setBaddays] = useState(generateData)

    return (
        <article className={`widget ${classes["widget--badday"]}`}>
            <main className={classes.main}>
                {baddays.map(day => {
                    const classNames = day.isBad
                        ? `${classes.button} ${classes.button_bad}`
                        : `${classes.button}`

                    return <button key={day.id} id={day.id} onClick={changeIsBad} className={classNames}></button>
                })}
            </main>
            <footer className={classes.footer}></footer>
        </article>
    )
}
