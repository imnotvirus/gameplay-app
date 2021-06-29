import React from "react";
import { View, Text, Image, StatusBar } from "react-native";

import { styles } from "./styles";
import logoImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

const SignIn: React.FC = () => {
	return (
		<View style={styles.container}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			<Image source={logoImg} style={styles.img} resizeMode="stretch" />
			<View style={styles.content}>
				<Text style={styles.title}>
					Organize {`\n`}
					suas jogatinas{`\n`}
					facilmente
				</Text>
				<Text style={styles.subtitle}>
					Cire grupos para jogar seus games {`\n`}
					favoritos com seus amigos
				</Text>
				<ButtonIcon activeOpacity={0.7} text="Entrar com Discord" />
			</View>
		</View>
	);
};

export default SignIn;
