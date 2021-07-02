import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import GuildIcon from "../GuildIcon";
import { SvgProps } from "react-native-svg";
import { categories } from "../../utils/category";
import PlayerSVG from "../../assets/player.svg";
import CalendarSVG from "../../assets/calendar.svg";
import { theme } from "../../global/styles/theme";
export type GuildProps = {
	id: string;
	name: string;
	icon: React.FC<SvgProps> | null;
	owner: Boolean;
};

export type AppointmentProps = {
	id: String;
	guild: GuildProps;
	category: String;
	date: String;
	description: String;
};

type Props = RectButtonProps & {
	data: AppointmentProps;
};

const Appointment: React.FC<Props> = ({ data, ...rest }) => {
	const [category] = categories.filter((item) => item.id === data.category);
	const { owner } = data.guild;
	const { primary, on } = theme.colors;
	return (
		<RectButton {...rest}>
			<View style={styles.container}>
				<GuildIcon />
				<View style={styles.content}>
					<View style={styles.header}>
						<Text style={styles.title}>{data.guild.name}</Text>
						<Text style={styles.category}>{category.title}</Text>
					</View>
					<View style={styles.footer}>
						<View style={styles.dateInfo}>
							<CalendarSVG />
							<Text style={styles.date}>{data.date}</Text>
						</View>
						<View style={styles.playerInfo}>
							<PlayerSVG fill={owner ? primary : on} />
							<Text style={[styles.player, { color: owner ? primary : on }]}>
								{owner ? "Anfitrião" : "Visitante"}
							</Text>
						</View>
					</View>
				</View>
			</View>
		</RectButton>
	);
};

export default Appointment;
