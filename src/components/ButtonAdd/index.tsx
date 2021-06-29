import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View } from "react-native";
import { styles } from "./styles";

const ButtonAdd: React.FC<RectButtonProps> = () => {
	return <RectButton style={styles.container}></RectButton>;
};

export default ButtonAdd;
