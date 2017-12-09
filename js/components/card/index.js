import React, { Component } from "react";

import {
  Container,
  Content
} from "native-base";

import styles from "./styles";
import CardDetails from './CardDetails';

class CardImage extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <CardDetails
                    profileName="Cartoon Network"
                    twitterName='cartoonnetwork'
                    bodyText="Life is beautiful"
                    commentTotal="100"
                    retweetTotal="250"
                    heartTotal="500"
                    logoImg={require("../../../img/cartoonnetwork.png")}
                    cardImg={require("../../../img/Minion.gif")}
                    lastSeenTime='25m'/>
            <CardDetails
                    profileName="GitHub"
                    twitterName='github'
                    bodyText="See what’s new in Marketplace this month: https://github.com/blog/2481-new-"
                    commentTotal="350"
                    retweetTotal="4000"
                    heartTotal="5000"
                    logoImg={require("../../../img/github_profile.png")}
                    cardImg={require("../../../img/github1.png")}
                    lastSeenTime='30m'/>
        </Content>
      </Container>
    );
  }
}

export default CardImage;