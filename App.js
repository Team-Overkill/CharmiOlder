import React from 'react';
import {
    Platform, ScrollView, StyleSheet,
  AppRegistry,
  Text,
  View, Button,
  Modal, TouchableHighlight
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import SampleText from './SampleText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Charmi',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Frank' })}
          title="Chat with Lucy"
        />

        <ScrollView style={styles.container}>
    
    <Button
      onPress={() => navigate('DrawerOpen')}
      title="Open drawer"
    />
    
  </ScrollView>

        <ModalExample/>
      </View>
    );
  }
}
class ChatScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
      // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Chat with with {params.user}</Text>
        <Button
          onPress={() => navigate('Matches', { user: 'dude' })}
          title="Chat with dude"
        />
      </View>
    );
  }
}
class MatchesScreen extends React.Component {
    // Nav options can be defined as a function of the screen's props:
  static navigationOptions =({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
      // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with Me</Text>
      </View>
    );
  }
}

class ModalExample extends React.Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 62, paddingLeft:25}}>
          <View>
            <Text>This is my Profile</Text>
            <Text>About Me: I am so cool</Text>
            <Text>From: Utah</Text>
            <Text>This is lame need ot put a header and ....</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={{width: 205, marginTop: 62, marginRight: 55, padding:25, backgroundColor: '#1A20FF'}}>Close Profile</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Profile</Text>
        </TouchableHighlight>

      </View>
    );
  }
}






// const MyNavScreen = ({ navigation, banner }) => (
//   <ScrollView style={styles.container}>
//     <SampleText>{banner}</SampleText>
//     <Button
//       onPress={() => navigation.navigate('DrawerOpen')}
//       title="Open drawer"
//     />
//     <Button onPress={() => navigation.goBack(null)} title="Go back" />
//   </ScrollView>
// );

// const InboxScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
// );
// InboxScreen.navigationOptions = {
//   drawerLabel: 'Inbox',
//   drawerIcon: ({ tintColor }) => (
//     <MaterialIcons
//       name="move-to-inbox"
//       size={24}
//       style={{ color: tintColor }}
//     />
//   ),
// };

// const DraftsScreen = ({ navigation }) => (
//   <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
// );
// DraftsScreen.navigationOptions = {
//   drawerLabel: 'Drafts',
//   drawerIcon: ({ tintColor }) => (
//     <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
//   ),
// };

// const DrawerExample = DrawerNavigator(
//   {
//     Inbox: {
//       path: '/',
//       screen: InboxScreen,
//     },
//     Drafts: {
//       path: '/sent',
//       screen: DraftsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Drafts',
//     contentOptions: {
//       activeTintColor: '#e91e63',
//     },
//   }
// );

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

// export default DrawerExample;

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Matches: { screen: MatchesScreen }
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);