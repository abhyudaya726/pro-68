import * as React from 'react';
import {View} from 'react-native';
import FaceBookScreen from './screens/fb';
import InstagramScreen from './screens/in';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook:FaceBookScreen,
  Instagram:InstagramScreen,
});

const AppContainer = createAppContainer(TabNavigator);