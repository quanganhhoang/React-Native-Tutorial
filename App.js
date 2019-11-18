import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'

// StackNavigator is an object that decides which components show up on screen
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen
  },
  {
    initialRouteName: 'Home', // config setting the first component to show [line 8]
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
