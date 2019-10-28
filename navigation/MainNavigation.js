import { createAppContainer } from "react-navigation"
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";
import { createStackNavigator } from "react-navigation-stack";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator({
    Tabs : {
        screen : TabNavigation, 
        navigationOptions : 
        {
            header : null
        }
    },
    Detail : {
        screen : DetailScreen, 
        navigationOptions : {
            ...headerStyles,
            headerBackVisible: false
        }
    }
    }, 
    {
        headerMode : "screen"
    //initialRouteName : "DetailScreen"
    }
);

export default createAppContainer(MainNavigation);