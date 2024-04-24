import { useEffect, useState } from "react"
import axios from "axios"

const useFetch = (endpoint: string, query: any) => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			"X-RapidAPI-Key": "6b9ec6e7c4msh84a02e91cd621c5p1b931bjsn66b95ccfaacd",
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
		params: { ...query },
	}

	const fetchData = async () => {
		setIsLoading(true)

		try {
			const res = await axios.request(options)

			setData(res.data.data)
			setIsLoading(false)
		} catch (error: any) {
			setError(error)
			alert(`There is an error: ${error}`)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	const refetch = () => {
		setIsLoading(true)
		fetchData()
	}

	return { data, isLoading, error, refetch }
}

export default useFetch
