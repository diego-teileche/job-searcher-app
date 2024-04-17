import { Text, View } from "@/components/Themed"
import NearbyJobs from "@/components/home/nearby/NearbyJobs"
import PopularJobs from "@/components/home/popular/PopularJobs"
import Welcome from "@/components/home/welcome/Welcome"
import { COLORS, SIZES } from "@/constants"
import { StatusBar } from "expo-status-bar"
import { ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function TabOneScreen() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<StatusBar style="dark" />
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						flex: 1,
						padding: SIZES.medium,
						backgroundColor: COLORS.lightWhite,
					}}
				>
					<Welcome />
					<PopularJobs />
					<NearbyJobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
