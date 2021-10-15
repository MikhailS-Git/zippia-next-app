import styles from '../styles/card.module.css'

export default function Card({ job }){
    return (
        <div className={styles.card}>
            <h2 className={styles.card_job}>{job.jobTitle}</h2>
            <p className={styles.card_company}>{job.companyName}</p>
            <p className={styles.card_desc}>{job.shortDesc}</p>
            <p className={styles.card_date}>{job.postedDate}</p>
        </div>
    )
}
