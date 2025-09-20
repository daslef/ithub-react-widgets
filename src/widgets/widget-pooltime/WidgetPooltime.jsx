import './WidgetPooltime.css'

export default function WidgetPooltime(props) {
    return (
        <article className="widget widget--pooltime">
            <div className="header">
                <p className="header__duration_hours">453h</p>
                <p className="header__duration_seconds">38m 14s</p>
            </div>
            <section className="footer">
                <h2 className="footer__heading">TOTAL TIME IN POOL</h2>
                <img className="footer__icon" src="/icons/pool.svg" />
            </section>
        </article>
    )
}
