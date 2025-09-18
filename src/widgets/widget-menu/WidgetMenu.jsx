import classes from './WidgetMenu.module.css'
import quoteIcon from '../../assets/icons/quote-double.svg'
import smartDeskIcon from '../../assets/icons/table.svg'

export default function WidgetMenu(props) {


    return (
        <article className={`widget ${classes["widget--menu"]}`}>
            <button className={classes.button} type="button" onClick={() => props.setPage('quote')}>
                <img src={quoteIcon} alt="quote" className={classes.button__icon} />
            </button>
            <button className={classes.button} type="button" onClick={() => props.setPage('smartdesk')}>
                <img src={smartDeskIcon} alt="smartdesk" className={classes.button__icon} />
            </button>            
            <button type="button" onClick={() => props.setPage('pooltime')}>pooltime</button>
        </article>
    )
}
