import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import styles, {
	container,
	jobName,
	logoContainer,
} from "./PopularJobCard.styles"
import { checkImageURL } from "@/utils"

type PopularJobCardProps = {
	item: any
	selectedJob: any
	handleCardPress: () => void
}

const PopularJobCard: React.FC<PopularJobCardProps> = ({
	item,
	selectedJob,
	handleCardPress,
}) => {
	return (
		<TouchableOpacity style={container(selectedJob, item)}>
			<TouchableOpacity style={logoContainer(selectedJob, item)}>
				<Image
					source={{
						uri: checkImageURL(item.employer_logo)
							? item.employer_logo
							: "https://cdn.icon-icons.com/icons2/1494/PNG/512/user_102890.png",
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>

			<Text style={styles.companyName} numberOfLines={1}>
				{item.employer_name}
			</Text>

			<View style={styles.infoContainer}>
				<Text style={jobName(selectedJob, item)} numberOfLines={1}>
					{item.job_title}
				</Text>
				<Text style={styles.location}>{item.job_country}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default PopularJobCard
