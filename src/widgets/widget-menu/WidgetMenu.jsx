import classes from './WidgetMenu.module.css'

export default function WidgetMenu(props) {


    return (
        <article className={`widget ${classes["widget--menu"]}`}>
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
