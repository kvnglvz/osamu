import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

export const MainTab = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Download" component={Download} />
      <Tab.Screen name="Settings" component={Settings} /> */}
    </Tab.Navigator>
  );
};

// manga-viewer MainTab
export const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="MainTab" component={MainTab} />
      {/* <MainStack.Screen name="MangaViewer" component={MangaViewer} /> */}
      {/* <MainStack.Screen name="MangaInfo" component={MangaInfo} /> */}
      {/* <MainStack.Screen name="Sources" component={Sources} /> */}
      {/* <MainStack.Screen name="RepoList" component={RepoList} /> */}
    </MainStack.Navigator>
  );
};

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="MainStackScreen"
        component={MainStackScreen}
        options={{ headerShown: false }}
      />
      {/* <RootStack.Screen name="Login" component={Login} /> */}
      {/* <RootStack.Screen name="LanguageList" component={LanguageList} /> */}
    </RootStack.Navigator>
  );
}
