import { View, Text, TouchableOpacity, Image } from "react-native"
import styles, { container, logoContainer } from "./PopularJobCard.styles"

export default function PopularJobCard({ item, selectedJob, handleCardPress }) {
	return (
		<TouchableOpacity
			style={container(selectedJob, item)}
			onPress={() => handleCardPress(item)}
		>
			<TouchableOpacity style={logoContainer(selectedJob, item)}>
				<Image
					source={{ uri: item.employer_logo }}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>
		</TouchableOpacity>
	)
}
