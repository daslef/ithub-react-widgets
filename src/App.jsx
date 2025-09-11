import { useState } from 'react'
import WidgetQuote from './widgets/widget-quote/WidgetQuote'
import WidgetPooltime from './widgets/widget-pooltime/WidgetPooltime'
import WidgetSmartdesk from './widgets/widget-smartdesk/WidgetSmartdesk'

import './App.css'

export default function App() {
    const [page, setPage] = useState("smartdesk")

    const pages = {
        quote: <WidgetQuote setPage={setPage} />,
        pooltime: <WidgetPooltime setPage={setPage} />,
        smartdesk: <WidgetSmartdesk setPage={setPage} />
    }

    return pages[page]
}

// css modules
// useState

