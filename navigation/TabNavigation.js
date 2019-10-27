import React from "react";
import { Platform } from "react-native"
import { createBottomTabNavigator } from "react-navigation-tabs";
import MovieScreen from "../screens/Movies"
import TVScreen from "../screens/TV"
import SearchScreen from "../screens/Search"
import { createAppContainer } from 'react-navigation';
import {BG_COLOR} from "../constants/Color";
import TabBarIcon from "../components/TabBarIcon";

const TabNavigation = createBottomTabNavigator(
    {
        Movie : {
            screen: MovieScreen, 
            navigationOptions : {
                tabBarIcon : ({focused}) => 
                <TabBarIcon focused = {focused} name={Platform === "ios" ? "ios-film" : "md-film"}/>
                }
            },
        TV : {
            screen : TVScreen, 
            navigationOptions : {
                tabBarIcon : ({focused}) => 
                <TabBarIcon focused = {focused} name={Platform === "ios" ? "ios-tv" : "md-tv"}/>
                }
            },
        Search : {
            screen : SearchScreen, 
            navigationOptions : {
                tabBarIcon : ({focused}) => 
                <TabBarIcon focused = {focused} name={Platform === "ios" ? "ios-search" : "md-search"}/>}
             }   
    },
    {tabBarOptions: {
            showLabel : false,
            style:{
                backgroundColor : BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);