import { useState, useRef, useEffect } from "react";
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
        form.reset()
      } else if (type === "password") {
        setLoginError(null)
        setPasswordError(message);
        passwordRef.current.value = ""
      }
    }
  }

  const loginRef = useRef()
  const passwordRef = useRef()

  const [loginError, setLoginError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    loginRef.current?.focus()
  }, [loginRef])

  return (
    <form method="post" onSubmit={handleSubmit}>
      <section className="entry">
        <label htmlFor="" className="entry__label">
          Login
        </label>
        <input ref={loginRef} type="text" name="login" className="entry__input" required />
        <span className="entry__error">{loginError}</span>
      </section>
      <section className="entry">
        <label htmlFor="" className="entry__label">
          Password
        </label>
        <input
          ref={passwordRef}
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
