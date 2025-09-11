import classes from './WidgetSmartdesk.module.css'

export default function WidgetSmartdesk(props) {
    return (
        <article className={`widget ${classes["widget--smartdesk"]}`}>
            <button type="button" onClick={() => props.setPage('quote')}>To quote</button>
            <div className={classes.header}>
                <p className={classes.header__office}>Office #1</p>
                <h2 className={classes.header__heading}>Smart desk</h2>
            </div>
            <section className={classes.main}>
                <p className={classes.main__height}>85cm</p>
                <p className={classes.main__heading}>Current height</p>
            </section>
            <section className={classes.footer}>
                <button className={`${classes.footer__button} ${classes["footer__button--left"]}`}>-</button>
                <button className={`${classes.footer__button} ${classes["footer__button--right"]}`}>+</button>
            </section>
        </article>
    )
}
