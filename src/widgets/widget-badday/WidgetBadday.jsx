import { useState } from 'react'
import classes from './WidgetBadday.module.css'

const baddaysData = [
    { id: 1, isBad: false },
    { id: 2, isBad: false },
    { id: 3, isBad: true },
    { id: 4, isBad: false },
]

export default function WidgetBadday(props) {

    return (
        <article className={`widget ${classes["widget--badday"]}`}>
            <main className={classes.main}>
                {baddaysData.map(day => {
                    if (day.isBad) {
                        return <button className={classes.button_bad}></button>
                    } else {
                        return <button className={classes.button}></button>
                    }
                })}
            </main>
            <footer className={classes.footer}></footer>
        </article>
    )
}
