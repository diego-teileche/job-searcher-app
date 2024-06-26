import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"
import styles from "./NearbyJobCard.style"
import { checkImageURL } from "@/utils"

type NearbyJobCardProps = {
	job: any
	handleNavigate: () => void
}

const NearbyJobCard: React.FC<NearbyJobCardProps> = ({
	job,
	handleNavigate,
}) => {
	return (
		<TouchableOpacity style={styles.container} onPress={handleNavigate}>
			<TouchableOpacity style={styles.logoContainer}>
				<Image
					source={{
						uri: checkImageURL(job.employer_logo)
							? job.employer_logo
							: "https://cdn.icon-icons.com/icons2/1494/PNG/512/user_102890.png",
					}}
					resizeMode="contain"
					style={styles.logImage}
				/>
			</TouchableOpacity>

			<View style={styles.textContainer}>
				<Text style={styles.jobName} numberOfLines={1}>
					{job.job_title}
				</Text>
				<Text style={styles.jobType}>{job.job_employment_type}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default NearbyJobCard
