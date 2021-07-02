import React from "react";
import { View, FlatList, Text } from "react-native";
import Profile from "../../components/Profile";

import { styles } from "./styles";

import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import { useState } from "react";
import Appointment from "../../components/Appointment";
import ListDivider from "../../components/ListDivider";
const Home: React.FC = () => {
	const [category, setCategory] = useState("");

	const appointment = [
		{
			id: "1",
			guild: {
				id: "1",
				name: "Lendarios",
				icon: null,
				owner: true,
			},
			category: "1",
			date: "22/06 às 20:40h",
			description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
		},
		{
			id: "2",
			guild: {
				id: "1",
				name: "Lendarios",
				icon: null,
				owner: true,
			},
			category: "1",
			date: "22/06 às 20:40h",
			description: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
		},
	];

	function handleCategorySelect(categoryID: string) {
		categoryID === category ? setCategory("") : setCategory(categoryID);
	}
	return (
		<View>
			<View style={styles.header}>
				<Profile />
				<ButtonAdd />
			</View>
			<CategorySelect
				categorySelected={category}
				setCategory={handleCategorySelect}
			/>
			<View style={styles.content}>
				<ListHeader title="Partidas agendadas" subtitle="Total 6" />
				<FlatList
					data={appointment}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <Appointment data={item} />}
					style={styles.matches}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={() => <ListDivider />}
				/>
			</View>
		</View>
	);
};

export default Home;
