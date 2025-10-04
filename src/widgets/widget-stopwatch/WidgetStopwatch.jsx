import { useState, useRef } from 'react'
import classes from './WidgetStopwatch.module.css'

export default function WidgetStopwatch(props) {
    function stopTimer() {
        setStatus("stopped")
        clearInterval(timerId.current)
    }

    function startTimer() {
        setStatus("running")
        timerId.current = setInterval(
            () => {
                setValue(v => v + 10)
            }, 10
        )
    }

    const timerId = useRef()
    // const [timerId, setTimerId] = useState()

    const [value, setValue] = useState(0)
    const [status, setStatus] = useState(null)

    // вместо кнопки STOP сделать две кнопки "сброс" и "пауза"
    // по аналогии с виджетом "умного стола"

    let runningButtonClasses = `${classes.button} ${classes["button--running"]} `
    let stoppedButtonClasses = `${classes.button} ${classes["button--stopped"]} `

    return (
        <article className={`widget ${classes["widget--stopwatch"]}`}>
            <header className={classes.header}>
                <date className={classes.header__date}>{new Date().toLocaleDateString('ru')}</date>
                <h2 className={classes.header__heading}>Stopwatch</h2>
            </header>
            <section className={classes.main}>
                <p className={classes.main__time}>{Math.floor(value / 1000)}</p>
                <button
                    onClick={status !== "running" ? startTimer : stopTimer}
                    className={status === "running" ? runningButtonClasses : stoppedButtonClasses}
                >{status !== "running" ? "START" : "STOP"}</button>
            </section>
        </article>
    )
}
