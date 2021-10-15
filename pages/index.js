import { useEffect } from 'react'
import { useRouter } from 'next/router'


export default function index(){

    // create a Router object to be able to navigate between pages
    const router = useRouter()
    
    // this is the only way i managed to make the base url look like this: '/test/jobs' 
    useEffect(() => {
        router.push('/test/jobs', undefined, { shallow: true })
    }, [])

    return (
            <></>
    )
}