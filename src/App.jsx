import { useState } from 'react'
import WidgetQuote from './widgets/widget-quote/WidgetQuote'
import WidgetPooltime from './widgets/widget-pooltime/WidgetPooltime'
import WidgetSmartdesk from './widgets/widget-smartdesk/WidgetSmartdesk'
import WidgetMenu from './widgets/widget-menu/WidgetMenu'

import homeIcon from './assets/icons/home-3.svg'

import classes from './App.module.css'

function Layout(props) {
    return (
        <>
            <button className={classes.button} type="button" onClick={() => props.setPage('menu')}>
                <img src={homeIcon} alt="home" className={classes.button__icon} />
            </button>
            {props.children}
        </>
    )
}

export default function App() {
    const [page, setPage] = useState("menu")

    const pages = {
        quote: <WidgetQuote />,
        pooltime: <WidgetPooltime />,
        smartdesk: <WidgetSmartdesk />
    }

    if (page === "menu") {
        return <WidgetMenu setPage={setPage} />
    }

    return <Layout setPage={setPage}>{pages[page]}</Layout>
}

