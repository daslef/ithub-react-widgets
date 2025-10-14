import { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import classes from "./WidgetGithub.module.css";

const USER_STATISTICS = gql`
  query {
    user(login: "daslef") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export default function WidgetGithub({ apolloClient }) {
  const [activity, setActivity] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    apolloClient
      .query({ query: USER_STATISTICS })
      .then((result) => {
        const activity =
          result.data.user.contributionsCollection.contributionCalendar;
        const { totalContributions, weeks } = activity;
        setTotal(totalContributions);

        const activityData = [];
        for (const week of weeks) {
          for (const day of week.contributionDays) {
            activityData.push({
              id: day.date,
              activity: day.contributionCount,
            });
          }
        }

        setActivity(activityData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <article className={`widget ${classes["widget--github"]}`}>
      <main className={classes.main}>
        {activity?.map((day) => {
          const opacity = day.activity / 20;
          return (
            <span
              key={day.id}
              id={day.id}
              className={classes.activity}
              style={{ opacity }}
            ></span>
          );
        })}
      </main>
      <footer className={classes.footer}>
        <span className={classes.total}>{total ?? "..."}</span>
        <h2>contributions</h2>
      </footer>
    </article>
  );
}
