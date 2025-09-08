import './App.css'
import WidgetQuote from './widgets/widget-quote/WidgetQuote'


export default function App() {
    const page = "quote"

    if (page === "quote") {
        return (
            <WidgetQuote />
        )
    }
}
