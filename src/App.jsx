import { useState } from 'react'
import './App.css'
import WidgetQuote from './widgets/widget-quote/WidgetQuote'
import WidgetPooltime from './widgets/widget-pooltime/WidgetPooltime'

export default function App() {
    const [page, setPage] = useState("pooltime")

    if (page === "quote") {
        return (
            <WidgetQuote setPage={setPage} />
        )
    } else if (page === "pooltime") {
        return (
            <WidgetPooltime setPage={setPage} />
        )
    }
}

// css modules
// 

