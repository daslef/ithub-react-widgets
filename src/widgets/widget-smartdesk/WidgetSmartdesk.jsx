import { useState } from 'react'
import classes from './WidgetSmartdesk.module.css'

export default function WidgetSmartdesk(props) {
    function increase() {
        if (value < 40) {
            setValue(v => v + 1)
        }
    }

    function decrease() {
        setValue(v => v > 20 ? v - 1 : v)
    }

    const [value, setValue] = useState(25)

    let decreaseButtonClasses = `${classes.footer__button} ${classes["footer__button--left"]} `
    let increaseButtonClasses = `${classes.footer__button} ${classes["footer__button--right"]} `

    if (value <= 20) {
        decreaseButtonClasses += classes["footer__button--disabled"]
    } else if (value >= 40) {
        increaseButtonClasses += classes["footer__button--disabled"]
    }

    return (
        <article className={`widget ${classes["widget--smartdesk"]}`}>
            <button type="button" onClick={() => props.setPage('quote')}>To quote</button>
            <button type="button" onClick={() => props.setPage('pooltime')}>To pooltime</button>
            <div className={classes.header}>
                <p className={classes.header__office}>Office #1</p>
                <h2 className={classes.header__heading}>Smart desk</h2>
            </div>
            <section className={classes.main}>
                <p className={classes.main__height}>{value}cm</p>
                <p className={classes.main__heading}>Current height</p>
            </section>
            <section className={classes.footer}>
                <button onClick={decrease} className={decreaseButtonClasses}>-</button>
                <button onClick={increase} className={increaseButtonClasses}>+</button>
            </section>
        </article>
    )
}
