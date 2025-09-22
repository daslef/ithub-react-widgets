import { useState } from 'react'
import classes from './WidgetBadday.module.css'

const baddaysData = [
    { id: 1, isBad: false },
    { id: 2, isBad: false },
    { id: 3, isBad: true },
    { id: 4, isBad: false },
]


export default function WidgetBadday(props) {
    function changeIsBad(event) {
        const dayId = Number(event.target.id)
        const dayObject = baddaysData.find(day => day.id === dayId)
        dayObject.isBad = !dayObject.isBad
    }

    return (
        <article className={`widget ${classes["widget--badday"]}`}>
            <main className={classes.main}>
                {baddaysData.map(day => {
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
