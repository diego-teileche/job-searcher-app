import Company from "@/components/job-details/company/Company"
import Tabs from "@/components/job-details/tabs/Tabs"
import { COLORS, SIZES } from "@/constants"
import useFetch from "@/hook/useFetch"
import { useGlobalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import {
	ActivityIndicator,
	RefreshControl,
	ScrollView,
	Text,
	View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const JobDetails = () => {
	const params = useGlobalSearchParams()
	const router = useRouter()
	const { data, isLoading, error, refetch } = useFetch("job-details", {
		job_id: params.id,
	})
	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = () => {}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{isLoading ? (
					<ActivityIndicator size={"large"} color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : data.length === 0 ? (
					<Text>No data</Text>
				) : (
					<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
						<Company />
						<Tabs />
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	)
}

export default JobDetails
