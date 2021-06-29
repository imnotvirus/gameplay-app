import React from "react";
import { View } from "react-native";
import Profile from "../../components/Profile";

import { styles } from "./styles";

const Home: React.FC = () => {
	return (
		<View>
			<View style={styles.header}>
				<Profile />
			</View>
		</View>
	);
};

export default Home;
