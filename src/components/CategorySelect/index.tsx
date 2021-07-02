import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { styles } from "./styles";

import { categories } from "../../utils/category";
import Category from "../Category";

type Props = {
	categorySelected: String;
	setCategory: (categoryID: string) => void;
};

const CategorySelect: React.FC<Props> = ({ categorySelected, setCategory }) => {
	return (
		<ScrollView
			horizontal
			style={styles.container}
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingRight: 40 }}
		>
			{categories.map((category) => (
				<Category
					key={category.id}
					title={category.title}
					icon={category.icon}
					checked={category.id === categorySelected}
					onPress={() => setCategory(category.id)}
				/>
			))}
		</ScrollView>
	);
};

export default CategorySelect;
