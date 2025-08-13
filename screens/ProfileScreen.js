import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ onNavigate, token }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Sayfası</Text>
      <Text style={styles.info}>Token: {token}</Text>
      <Button title="Ana Sayfaya Dön" onPress={() => onNavigate('home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  info: { marginBottom: 20, fontSize: 16 },
});
