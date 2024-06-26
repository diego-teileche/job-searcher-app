import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from "react-native"
import React, { useState } from "react"
import styles, { getTabStyle, getTabText } from "./Welcome.styles"
import { SIZES, icons } from "@/constants"
import { useRouter } from "expo-router"

const jobTypes = ["Full-time", "Part-time", "Contractor"]

export default function Welcome() {
	const router = useRouter()
	const [activeJobType, setActiveJobType] = useState("Full-time")

	return (
		<>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Diego</Text>
				<Text style={styles.welcomeMessage}>Find your perfect job</Text>
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						placeholder="What are you looking for?"
					/>
				</View>

				<TouchableOpacity style={styles.searchBtn}>
					<Image
						source={icons.search}
						resizeMode="contain"
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={getTabStyle(activeJobType, item)}
							onPress={() => {
								setActiveJobType(item)
								router.push(`/search/:${item}`)
							}}
						>
							<Text style={getTabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: SIZES.small }}
					horizontal
				/>
			</View>
		</>
	)
}
