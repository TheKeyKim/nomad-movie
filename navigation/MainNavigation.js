import { createAppContainer } from "react-navigation"
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { createStackNavigator } from "react-navigation-stack";

const MainNavigation = createStackNavigator(
    {
    Tabs : {screen : TabNavigation, navigationOptions : {header : null}},
    Detail : DetailScreen
    }, 
    {
    //initialRouteName : "DetailScreen"
    }
);

export default createAppContainer(MainNavigation);