import React, { Component } from "react";

import { 
		Container, 
		Icon, 
		Fab,
		Content
	 } from "native-base";

import styles from "./styles";
import CardImage from "../card";

class Home extends Component {
	static navigationOptions = {
		tabBarIcon: ({ tintColor }) => (
				<Icon name="home" style={{color: tintColor}} />
	 ), }

	constructor() {
		super();
		this.state = {
		  active: true,
		};
	}

	render() {
		const { navigation } = this.props;
		return (
			<Container>
				<Content scrollEnabled={true}>
					<CardImage />					
				</Content>
				<Fab
						active={this.state.active}
						style={{ backgroundColor: 'blue', marginBottom: 30 }}
						position="bottomRight"
						onPress={() => this.setState({ active:!this.state.active })}>
						<Icon name="create" />
				</Fab>
			</Container>
		);
	}
}

export default Home;
