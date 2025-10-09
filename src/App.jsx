import { useState } from "react";
import WidgetQuote from "./widgets/widget-quote/WidgetQuote";
import WidgetPooltime from "./widgets/widget-pooltime/WidgetPooltime";
import WidgetSmartdesk from "./widgets/widget-smartdesk/WidgetSmartdesk";
import WidgetMenu from "./widgets/widget-menu/WidgetMenu";
import WidgetBadday from "./widgets/widget-badday/WidgetBadday";
import WidgetLogin from "./widgets/widget-login/WidgetLogin";
import WidgetStopwatch from "./widgets/widget-stopwatch/WidgetStopwatch";
import WidgetGithub from "./widgets/widget-github/WidgetGithub";

import homeIcon from "./assets/icons/home-3.svg";

import classes from "./App.module.css";

function Layout(props) {
  return (
    <>
      <button
        className={classes.button}
        type="button"
        onClick={() => props.setPage("menu")}
      >
        <img src={homeIcon} alt="home" className={classes.button__icon} />
      </button>
      {props.children}
    </>
  );
}

export default function App() {
  // TODO добавить widget-badday в роутинг
  const [user, setUser] = useState(true); // TODO
  const [page, setPage] = useState(!user ? "login" : "github");

  const publicPages = {
    login: <WidgetLogin setUser={setUser} setPage={setPage} />,
    menu: <WidgetMenu setPage={setPage} />,
  };

  const protectedPages = {
    quote: <WidgetQuote />,
    pooltime: <WidgetPooltime />,
    smartdesk: <WidgetSmartdesk />,
    badday: <WidgetBadday />,
    stopwatch: <WidgetStopwatch />,
    github: <WidgetGithub />
  };

  if (page in publicPages) {
    return publicPages[page];
  }

  return <Layout setPage={setPage}>{protectedPages[page]}</Layout>;
}
