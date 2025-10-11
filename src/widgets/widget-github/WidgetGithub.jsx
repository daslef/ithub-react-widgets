import { useState, useEffect } from 'react'
import { gql } from '@apollo/client'
import classes from './WidgetGithub.module.css'

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
}`

function generateData() {
    function getRandomActivity() {
        const randomNumber = Math.random() * 20
        return Math.round(randomNumber)
    }

    const data = []

    for (let i = 0; i < 256; i++) {
        data.push({
            id: i + 1,
            activity: getRandomActivity()
        })
    }

    return data
}

export default function WidgetGithub({ apolloClient }) {
    const [activity, setActivity] = useState(generateData)
    const [total, setTotal] = useState(null)

    useEffect(() => {
        apolloClient
            .query({ query: USER_STATISTICS })
            .then((result) => {
                const activity = result.data.user.contributionsCollection.contributionCalendar
                const { totalContributions, weeks } = activity
                setTotal(totalContributions)
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <article className={`widget ${classes["widget--github"]}`}>
            <main className={classes.main}>
                {activity.map(day => {
                    const opacity = day.activity / 20
                    return <span key={day.id} id={day.id} className={classes.activity} style={{ opacity }}></span>
                })}
            </main>
            <footer className={classes.footer}>
                <span>{total ?? "..."}</span>
                <h2>contributions</h2>
            </footer>
        </article>
    )
}
