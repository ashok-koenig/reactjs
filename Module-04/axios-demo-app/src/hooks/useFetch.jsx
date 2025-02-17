import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading]= useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await axios.get(url)               
                setData(response.data)
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    })

  return {data, loading, error}
}

export default useFetch