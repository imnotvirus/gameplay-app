import React from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";

import discordImg from "../../assets/discord.png";
import { styles } from "./styles";
type Props = TouchableOpacityProps & {
	text: string;
};
export const ButtonIcon: React.FC<Props> = ({ text, ...props }) => {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<View style={styles.inconWrapper}>
				<Image source={discordImg} style={styles.icon} />
			</View>
			<Text style={styles.title}>{text}</Text>
		</TouchableOpacity>
	);
};
