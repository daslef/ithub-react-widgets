import { useState } from 'react'
import WidgetQuote from './widgets/widget-quote/WidgetQuote'
import WidgetPooltime from './widgets/widget-pooltime/WidgetPooltime'
import WidgetSmartdesk from './widgets/widget-smartdesk/WidgetSmartdesk'
import WidgetMenu from './widgets/widget-menu/WidgetMenu'

import homeIcon from './assets/icons/home-3.svg'

import classes from './App.module.css'

function Layout({children}) {
    return (
        <>
            <button className={classes.button} type="button" onClick={() => props.setPage('quote')}>
                <img src={homeIcon} alt="quote" className={classes.button__icon} />
            </button>
            {children}
        </>
    )
}

export default function App() {
    const [page, setPage] = useState("menu")

    const pages = {
        menu: <WidgetMenu setPage={setPage} />,
        quote: <WidgetQuote setPage={setPage} />,
        pooltime: <WidgetPooltime setPage={setPage} />,
        smartdesk: <WidgetSmartdesk setPage={setPage} />
    }

    return <Layout>{pages[page]}</Layout>
}

