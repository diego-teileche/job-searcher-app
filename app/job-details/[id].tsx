import { COLORS } from "@/constants"
import useFetch from "@/hook/useFetch"
import { useGlobalSearchParams, useRouter } from "expo-router"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const JobDetails = () => {
	const params = useGlobalSearchParams()
	const router = useRouter()
	const { data, isLoading, error, refetch } = useFetch("job-details", {
		job_id: params.id,
	})

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: COLORS.lightWhite }}
		></SafeAreaView>
	)
}

export default JobDetails
