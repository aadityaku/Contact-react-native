import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ContactName from "./components/contact";
import Phone from "./components/phone";
import React from "react"
import View from "react-native";
import ContactDetails from "./components/ContactDetails";
const Tab = createMaterialTopTabNavigator();
const Stack=createStackNavigator();
function TabScreen(){
  return(
    <Tab.Navigator>
      
      <Tab.Screen name="Phone" component={Phone}/>
      <Tab.Screen name="ContactName" component={ContactName}/>
    
  </Tab.Navigator>
  )     
}

const App = () =>{
 
  return(
     <NavigationContainer>
       <Stack.Navigator>
           <Stack.Screen name="Root" component={TabScreen} options={{headerShown:false}}/>
           <Stack.Screen name="ContactDetails" component={ContactDetails} />
       </Stack.Navigator>
     
      
    </NavigationContainer>
     
    
    
  )
}
export default App;