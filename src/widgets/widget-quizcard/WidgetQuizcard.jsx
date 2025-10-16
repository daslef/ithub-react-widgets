import { useState } from "react";
import classes from "./WidgetQuizcard.module.css";
import { quizCards } from "../../providers/data";

export default function WidgetQuizcard(props) {
  function translate() {
    setIsTranslate((current) => !current);
  }

  function next() {
    setIsTranslate(false);
    setCurrentIndex((current) => current + 1);
  }

  const [value, setValue] = useState(25);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTranslate, setIsTranslate] = useState(false);

  let decreaseButtonClasses = `${classes.footer__button} ${classes["footer__button--left"]} `;
  let increaseButtonClasses = `${classes.footer__button} ${classes["footer__button--right"]} `;

  if (quizCards.length - 1 === currentIndex) {
    increaseButtonClasses += classes["footer__button--disabled"];
  }

  return (
    <article className={`widget ${classes["widget--quizcard"]}`}>
      <div className={classes.header}>
        {isTranslate ? (
          <h2 className={classes.header__heading}>
            {currentIndex + 1}. {quizCards[currentIndex].translation}
          </h2>
        ) : (
          <h2 className={classes.header__heading}>
            {currentIndex + 1}. {quizCards[currentIndex].word}
          </h2>
        )}

        {!isTranslate && (
          <p className={classes.header__office}>
            {quizCards[currentIndex].description}
          </p>
        )}
      </div>
      <section className={classes.main}>
        <p className={classes.main__height}>
          {quizCards[currentIndex].difficulty}
        </p>
        <p className={classes.main__heading}>Voice</p>
      </section>
      <section className={classes.footer}>
        <button onClick={translate} className={decreaseButtonClasses}>
          Translate
        </button>
        <button onClick={next} className={increaseButtonClasses}>
          Next
        </button>
      </section>
    </article>
  );
}
