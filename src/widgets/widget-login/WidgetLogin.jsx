import { useState } from "react";
import { login } from "../../providers/auth";

export default function WidgetLogin(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const loginValue = form.elements.login.value;
    const passwordValue = form.elements.password.value;

    try {
      const user = login({
        login: loginValue,
        password: passwordValue,
      });

      props.setUser(user);
      props.setPage("menu");
    } catch (error) {
      const { type, message } = JSON.parse(error.message);
      if (type === "login") {
        setLoginError(message);
      } else if (type === "password") {
        setPasswordError(message);
      }
    }
  }

  const [loginError, setLoginError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  return (
    <form method="post" onSubmit={handleSubmit}>
      <section className="entry">
        <label htmlFor="" className="entry__label">
          Login
        </label>
        <input type="text" name="login" className="entry__input" required />
        <span className="entry__error">{loginError}</span>
      </section>
      <section className="entry">
        <label htmlFor="" className="entry__label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="entry__input"
          required
        />
        <span className="entry__error">{passwordError}</span>
      </section>

      <button type="submit" className="button">
        Войти
      </button>
    </form>
  );
}
