import './WidgetSmartdesk.css'

export default function WidgetSmartdesk(props) {
    return (
        <article className="widget widget--smartdesk">
            <button type="button" onClick={() => props.setPage('quote')}>To quote</button>
            <div className="header">
                <p className="header__office">Office #1</p>
                <h2 className="header__heading">Smart desk</h2>
            </div>
            <section className="main">
                <p className="main__height">85cm</p>
                <p className="main__heading">Current height</p>
            </section>
            <section className="footer"></section>
        </article>
    )
}
