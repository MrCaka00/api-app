import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductFormScreen from './screens/ProductFormScreen';

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [activeScreen, setActiveScreen] = useState('login');

  const handleLogin = (token) => {
    setUserToken(token);
    setActiveScreen('home');
  };

  const goToScreen = (screen) => setActiveScreen(screen);

  if (!userToken) return <LoginScreen onLogin={handleLogin} />;
  if (activeScreen === 'home')
    return <HomeScreen onNavigate={goToScreen} token={userToken} />;
  if (activeScreen === 'profile')
    return <ProfileScreen onNavigate={goToScreen} token={userToken} />;
  if (activeScreen === 'productform')
    return <ProductFormScreen onNavigate={goToScreen} token={userToken} />;

  return <SafeAreaView />;
}
