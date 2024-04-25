import { ImageSourcePropType, TouchableOpacity, Image } from "react-native"
import React from "react"
import styles, { btnImg } from "./ScreenHeaderStyle"
import { StatusBar } from "expo-status-bar"

interface HeaderProps {
	iconUrl: ImageSourcePropType
	dimension: string
	handlePress?: () => void
}

const ScreenHeaderBtn: React.FC<HeaderProps> = ({
	iconUrl,
	dimension,
	handlePress,
}) => {
	return (
		<TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
			<StatusBar style="dark" />
			<Image source={iconUrl} resizeMode="cover" style={btnImg(dimension)} />
		</TouchableOpacity>
	)
}

export default ScreenHeaderBtn
