import CardsList from '../../components/cardsList'
import Header from '../../components/header'

export default function Jobs({jobs}){
    
   return (
       <div>
           <Header />
           <CardsList jobs={jobs} />
       </div>
   )
}

// create method to fetch data on the server side (SSR) and return it as props

Jobs.getInitialProps = async ()=> {
    const response = await fetch("https://www.zippia.com/api/jobs", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "companySkills": true,
            "dismissedListingHashes": [],
            "fetchJobDesc": true,
            "jobTitle": "Business Analyst",
            "locations": [],
            "numJobs": 20,
            "previousListingHashes": []
            })
    })

    const data = await response.json()
    return {
        jobs: data.jobs
    }
}
