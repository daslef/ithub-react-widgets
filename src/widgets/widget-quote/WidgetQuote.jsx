import './WidgetQuote.css'

export default function WidgetQuote() {
    return (
        <article className="widget widget--quote">
            <button type="button">To pooltime</button>
            <div className="header">
                <span className="header__date">5</span>
                <span className="header__month">&nbsp;FEB</span>
                <span className="header__quote">“”</span>
            </div>
            <section className="quote">
                <h2 className="quote__heading">Quote of the day:</h2>
                <p className="quote__text">keep it simple.</p>
            </section>
        </article>
    )
}
