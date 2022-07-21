import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen'
import SearchBar from './src/components/SearchBar';
import ReusltsShowScreen from './src/screens/ReusltsShowScreen';


 const navigator=createStackNavigator({
  Search:SearchScreen,
  SearchBar:SearchBar,
  ReusltsShow:ReusltsShowScreen,



 },
 {
  initialRouteName:'Search',
  defaultNavigationOptions:{
title:'Business Search'

  }

 })
 export default createAppContainer(navigator)
