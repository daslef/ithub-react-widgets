export default function WidgetLogin() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const login = form.elements.login.value;
    const password = form.elements.password.value;

    console.log(login, password);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <section className="entry">
        <label htmlFor="" className="entry__label">
          Login
        </label>
        <input type="text" name="login" className="entry__input" required />
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
      </section>

      <button type="submit" className="button">
        Войти
      </button>
    </form>
  );
}
