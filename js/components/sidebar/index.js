import React, { Component } from "react";
import { Image } from "react-native";

import {
	Content,
	Header,
	Footer,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	Divider,
	StyleProvider,
	Thumbnail,
	getTheme,
	variables,
	Card,CardItem,
} from "native-base";

import styles from "./style";

const profileImage = require("../../../img/WonderWoman.png");

const datas = [
	{
		name: "Profile",
		route: "Profile",
		icon: "ios-person",
		bg: "#C5F442",
	},
	{
		name: "Lists",
		route: "Lists",
		icon: "list",
		bg: "#C5F442",
	},
	{
		name: "Moments",
		route: "Moments",
		icon: "albums",
		bg: "#477EEA",
	},
	{
		name: "Highlights",
		route: "Highlights",
		icon: "bookmarks",
		bg: "#DA4437",
	},
];

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Card>
						<CardItem>
							<View style = {{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
								<Thumbnail size={55} source={profileImage} />
								<Text style={{fontWeight: 'bold'}}>
									Gal Gadot
								</Text>
								<Text note>
									@wonderwoman
								</Text>
								<View style = {{flexDirection: 'row'}} >
              						<Text>50 Following </Text>
                  					<Text >1000 Followers</Text>
                  				</View>
							</View>							
						</CardItem>
						<CardItem style={{elevation: 2,borderBottomWidth: 4,borderTopWidth: 4}}>
							<List
								dataArray={datas}
								renderRow={data =>
									<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
										<Left>
											<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
											<Text style={styles.text}>
												{data.name}
											</Text>
										</Left>
									</ListItem>}
							/>
						</CardItem>
						<CardItem >
							<List>
								<ListItem>
									<Text>Settings and privacy</Text>               
								</ListItem>
								<ListItem>
									<Text>Help Centre</Text>               
								</ListItem>
							</List>
						</CardItem>
          			</Card>
				</Content>
				<Footer >
					<Left>
						<Icon style={{ marginLeft: 10 }} name='moon'></Icon>
					</Left>
					<Right>
						<Icon style={{ marginRight: 10 }} name='qr-scanner'></Icon>
					</Right>
				</Footer>
			</Container>
		);
	}
}

export default SideBar;
