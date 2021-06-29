import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image } from "react-native";

import discordImg from "../../assets/discord.png";
import { styles } from "./styles";
type Props = RectButtonProps & {
	text: string;
};
export const ButtonIcon: React.FC<Props> = ({ text, ...props }) => {
	return (
		<RectButton style={styles.container} {...props}>
			<View style={styles.iconWrapper}>
				<Image source={discordImg} style={styles.icon} />
			</View>
			<Text style={styles.title}>{text}</Text>
		</RectButton>
	);
};
