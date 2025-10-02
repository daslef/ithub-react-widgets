import { useState } from 'react'
import classes from './WidgetStopwatch.module.css'

export default function WidgetStopwatch(props) {
    function stopTimer() {
        setStatus("stopped")
    }

    function startTimer() {
        setStatus("running")
    }

    const [value, setValue] = useState(0)
    const [status, setStatus] = useState(null)

    let runningButtonClasses = `${classes.footer__button} ${classes["footer__button--running"]} `
    let stoppedButtonClasses = `${classes.footer__button} ${classes["footer__button--stopped"]} `

    return (
        <article className={`widget ${classes["widget--stopwatch"]}`}>
            <header className={classes.header}>
                <date className={classes.header__date}></date>
                <h2 className={classes.header__heading}>Stopwatch</h2>
            </header>
            <section className={classes.main}>
                <p className={classes.main__time}>{value}</p>
                <button
                    onClick={status !== "running" ? startTimer : stopTimer}
                    className={status !== "running" ? runningButtonClasses : stoppedButtonClasses}
                >{status !== "running" ? "STOP" : "START"}</button>
            </section>
        </article>
    )
}
