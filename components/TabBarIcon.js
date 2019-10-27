import React from "react";
import proptypes from "prop-types";
import {Ionicons} from "@expo/vector-icons";
import { INACTIVE_COLOR, ACTIVE_COLOR } from "../constants/Color";

const TabBarIcon = ({name, focused}) => (
    <Ionicons 
        size = {26} 
        name = {name} 
        color = {focused ? ACTIVE_COLOR : INACTIVE_COLOR}
    />
);

TabBarIcon.proptypes = {
    name :proptypes.string.isRequired,
    focused: proptypes.bool.isRequired
}

export default TabBarIcon;