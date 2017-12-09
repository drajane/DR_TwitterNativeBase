import React from 'react';
import PropTypes from 'prop-types'
import { Image } from "react-native";
import {
  Button,
  Card,
  Icon,
  CardItem,
  View,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
  IconNB
} from "native-base";

import styles from "./styles";

const CardDetails = (props) => {
  CardDetails.propTypes = {
    profileName: PropTypes.string,
		twitterName: PropTypes.string,
    bodyText: PropTypes.string,
    commentTotal: PropTypes.string,
		retweetTotal: PropTypes.string,
		heartTotal: PropTypes.string,
		logoImg: PropTypes.string,
		cardImg: PropTypes.string,
    lastSeenTime: PropTypes.string
};
const { profileName, twitterName, bodyText, commentTotal, retweetTotal, heartTotal, logoImg, cardImg, lastSeenTime} = props;

return (
	<Card style={styles.mb}>
		<CardItem>
			<View>
				<View style={{flexDirection: 'row'}}>
					<Thumbnail small source={logoImg} />
					<Text>{profileName}</Text>
					<Text note>@{twitterName}</Text>
					<Text>{lastSeenTime}</Text>
					<Icon iconRight name='arrow-dropdown'/>
				</View>
			  <Text>{bodyText}</Text>
			</View>
		</CardItem>
		<CardItem cardBody>
		  <Image
			style={{
			  resizeMode: "cover",
			  width: null,
			  height: 200,
			  flex: 1
			}}
			source={cardImg}
		  />
		</CardItem>
		<CardItem style={{ paddingVertical: 0 }}>
			<Button iconLeft transparent>
			  <Icon active name="chatboxes" />
			  <Text>{commentTotal}</Text>
			</Button>
			<Button  iconLeft transparent>
			  <Icon active name="repeat" />
			  <Text>{retweetTotal}</Text>
			</Button>
			<Button  iconLeft transparent>
			  <Icon active name="heart" />
			  <Text>{heartTotal}</Text>
			</Button>
			<Button  transparent>
			  <Icon active name="mail" />
			</Button>
		</CardItem>
    </Card>
    );

};


export default CardDetails ;
