import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { PaperProvider } from 'react-native-paper';
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingScreen";
import CategoriesScreen from "./components/CategoriesScreen";
import LeaderboardScreen from "./components/LeaderboardScreen";


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff0000',
        tabBarInactiveTintColor: '#AAAAAA'
      }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarLabel: "Categories",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="format-list-bulleted" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            tabBarLabel: "Leaderboard",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="leaderboard" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

