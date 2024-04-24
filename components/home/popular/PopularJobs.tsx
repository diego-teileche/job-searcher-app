import {
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	FlatList,
} from "react-native"
import React from "react"
import styles from "./PopularJobs.style"
import { useRouter } from "expo-router"
import { COLORS, SIZES } from "@/constants"
import PopularJobCard from "@/components/common/cards/popular/PopularJobCard"
import useFetch from "@/hook/useFetch"

export default function PopularJobs() {
	const router = useRouter()
	const { data, isLoading, error } = useFetch("search", {
		query: "React developer",
		num_pages: 1,
	})

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>PopularJobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					<FlatList
						data={[1, 2, 3, 4]}
						renderItem={({ item }) => <PopularJobCard item={item} />}
						keyExtractor={(item) => item?.job_id}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						horizontal
					/>
				)}
			</View>
		</View>
	)
}
