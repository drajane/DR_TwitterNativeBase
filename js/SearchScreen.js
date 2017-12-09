import React, { Component } from 'react';
import {StyleSheet, Image} from 'react-native';
import { 
  Container, 
  View, 
  Icon,
  Fab
} from 'native-base';


class SearchScreen extends Component  {
  static navigationOptions = {  
     tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{color: tintColor}} />
    ),
  }

  constructor() {
		super();
		this.state = {
		  active: true,
		};
	}
 
  render() { 
  return (
    <Container>        
      <View style={{flex:1}}>    
      </View>
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

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});

export default SearchScreen;