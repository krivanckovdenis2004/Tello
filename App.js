import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import CodeScreen from './screens/CodeScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#0f172a' },
          headerTintColor: '#ffffff',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: '#0f172a' },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Code" component={CodeScreen} options={{ title: 'Код подтверждения' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tello' }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Поиск' }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Чат' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
