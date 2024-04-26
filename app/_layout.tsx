import FontAwesome from "@expo/vector-icons/FontAwesome"
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native"
import { Stack, useRouter } from "expo-router"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { useColorScheme } from "@/components/useColorScheme"
import { COLORS, icons } from "@/constants"
import ScreenHeaderBtn from "@/components/common/header/ScreenHeaderBtn"

export { ErrorBoundary } from "expo-router"
export const unstable_settings = {
	initialRouteName: "index",
}

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	})

	useEffect(() => {
		if (error) throw error
	}, [error])

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync()
		}
	}, [loaded])

	if (!loaded) {
		return null
	}

	return <RootLayoutNav />
}

function RootLayoutNav() {
	const colorScheme = useColorScheme()
	const router = useRouter()

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						headerStyle: { backgroundColor: COLORS.lightWhite },
						headerShadowVisible: false,
						headerBackVisible: false,
						headerTransparent: true,
						headerTitle: "",
						headerLeft: () => (
							<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
						),
						headerRight: () => (
							<ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
						),
					}}
				/>
				<Stack.Screen
					name="job-details/[id]"
					options={{
						headerStyle: { backgroundColor: COLORS.lightWhite },
						headerShadowVisible: false,
						headerBackVisible: false,
						headerTransparent: true,
						headerTitle: "",
						headerLeft: () => (
							<ScreenHeaderBtn
								iconUrl={icons.left}
								dimension="60%"
								handlePress={() => router.back()}
							/>
						),
						headerRight: () => (
							<ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
						),
					}}
				/>
			</Stack>
		</ThemeProvider>
	)
}
