import { users } from "./data";

export function login({ login, password }) {
  const user = users.find((user) => user.login === login);

  if (!user) {
    const errorMessage = JSON.stringify({
      type: "login",
      message: "User not found",
    });
    throw new Error(errorMessage);
  }

  const passwordCorrect = user.password === password;

  if (!passwordCorrect) {
    const errorMessage = JSON.stringify({
      type: "password",
      message: `Incorrect password for ${login}`,
    });
    throw new Error(errorMessage);
  }

  return user;
}
