import Card from "./card"
import styles from "../styles/cardList.module.css"
import { useState } from "react"

export default function CardsList( props ){

    // create a state to be able to filter the jobs
    const [jobs, setJobs] = useState(props.jobs)
    const [name, setName] = useState("")

    //filter by date functionality
    const filterByDate = () => {
        setJobs(jobs.filter( (job) => parseInt(job.postedDate) <= 7) )
    }

    return (
        <div className={styles.cardsList}>

            <div className={styles.search_form}>
                <h2 className={styles.form_title}>Search parameters</h2>
                <p className={styles.search_item}>Enter name to search by company's name</p>
                
                {/*add controled input*/}

                <input 
                    className={styles.search_item + " " + styles.input}
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />

                <br />

                {/*filter by date button */}

                <button
                    className={styles.btn}
                    onClick={filterByDate}
                >
                        Show recent jobs
                </button>

                <br />

                {/* reset filtration parameters button */}
                <button
                    className={styles.btn + " " + styles.reset_btn}
                    onClick={()=>{setJobs(props.jobs); setName("")}}
                >
                    Reset All
                </button>
            </div>
            <div className={styles.cards_container}>
            {
                //take first 10 jobs and filter them by company's name and render them as a list of cards

                jobs.slice(0,10).filter( job => job.companyName.toLowerCase().includes(name.toLowerCase())).map( job => {
                    return <Card job={job} key={job.jobId} />
                })
            }
            </div>
        </div>
    )
}
