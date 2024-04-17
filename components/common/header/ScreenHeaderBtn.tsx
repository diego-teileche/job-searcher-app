import { ImageSourcePropType, TouchableOpacity, Image } from "react-native"
import React from "react"
import styles, { btnImg } from "./ScreenHeaderStyle"
import { StatusBar } from "expo-status-bar"

interface Header {
	iconUrl: ImageSourcePropType
	dimension: string
}

const ScreenHeaderBtn: React.FC<Header> = ({ iconUrl, dimension }) => {
	return (
		<TouchableOpacity style={styles.btnContainer} /* onPress={handlePress} */>
			<StatusBar style="dark" />
			<Image source={iconUrl} resizeMode="cover" style={btnImg(dimension)} />
		</TouchableOpacity>
	)
}

export default ScreenHeaderBtn
