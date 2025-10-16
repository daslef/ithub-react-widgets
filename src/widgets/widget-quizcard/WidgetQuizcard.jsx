import { useState, useReducer } from "react";
import classes from "./WidgetQuizcard.module.css";
import { quizCards } from "../../providers/data";

function quizReducer(state, event) {
  switch (event.type) {
    case "TRANSLATE":
      return {
        ...state,
        isTranslate: true
      }
    case "NEXT_CARD":
      return {
        ...state,
        isTranslate: false,
        currentIndex: state.currentIndex + 1
      }
  }
}

const INITIAL_STATE = {
  isTranslate: false,
  currentIndex: 0
}

export default function WidgetQuizcard() {
  const [state, dispatch] = useReducer(quizReducer, INITIAL_STATE)

  let decreaseButtonClasses = `${classes.footer__button} ${classes["footer__button--left"]} `;
  let increaseButtonClasses = `${classes.footer__button} ${classes["footer__button--right"]} `;

  if (quizCards.length - 1 === state.currentIndex) {
    increaseButtonClasses += classes["footer__button--disabled"];
  }

  return (
    <article className={`widget ${classes["widget--quizcard"]}`}>
      <div className={classes.header}>
        <h2 className={classes.header__heading}>
          {state.currentIndex + 1}. {quizCards[state.currentIndex][state.isTranslate ? "translation" : "word"]}
        </h2>

        {!state.isTranslate && (
          <p className={classes.header__office}>
            {quizCards[state.currentIndex].description}
          </p>
        )}
      </div>
      <section className={classes.main}>
        <p className={classes.main__height}>
          {quizCards[state.currentIndex].difficulty}
        </p>
        <p className={classes.main__heading}>Voice</p>
      </section>
      <section className={classes.footer}>
        <button
          onClick={() => {
            dispatch({ type: "TRANSLATE" })
          }}
          className={decreaseButtonClasses}
        >
          Translate
        </button>
        <button
          onClick={() => {
            dispatch({ type: "NEXT_CARD" })
          }}
          className={increaseButtonClasses}
        >
          Next
        </button>
      </section>
    </article>
  );
}
