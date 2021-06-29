import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import logoImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

const SignIn: React.FC = () => {
	const navigation = useNavigation();
	function handleSignIn() {
		navigation.navigate("Home");
	}
	return (
		<View style={styles.container}>
			<Image source={logoImg} style={styles.img} resizeMode="stretch" />
			<View style={styles.content}>
				<Text style={styles.title}>
					Conecte-se {`\n`}e organize suas{`\n`}
					jogatinas
				</Text>
				<Text style={styles.subtitle}>
					Crie grupos para jogar seus games {`\n`}
					favoritos com seus amigos
				</Text>
				<ButtonIcon onPress={handleSignIn} text="Entrar com Discord" />
			</View>
		</View>
	);
};

export default SignIn;
