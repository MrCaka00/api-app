import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import axios from 'axios';

const API_URL = 'http://oyna.cubemcpe.com:8000';

export default function UserFormScreen({ token, onNavigate }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addUser = () => {
    if (!username || !email || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz');
      return;
    }

    axios.post(`${API_URL}/users`, { username, email, password }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        Alert.alert('Başarılı', 'Kullanıcı eklendi');
        onNavigate('home');
      })
      .catch(() => Alert.alert('Hata', 'Kullanıcı eklenirken hata oluştu'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kullanıcı Ekle / Düzenle</Text>
      <TextInput placeholder="Kullanıcı Adı" value={username} onChangeText={setUsername} style={styles.input} />
      <TextInput placeholder="E-posta" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Şifre" value={password} onChangeText={setPassword} style={styles.input} secureTextEntry />
      <Button title="Kaydet" onPress={addUser} />
      <Button title="İptal" onPress={() => onNavigate('home')} color="gray" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, justifyContent:'center' },
  title: { fontSize: 24, fontWeight:'bold', marginBottom:20, textAlign:'center' },
  input: { borderWidth:1, borderColor:'#ccc', borderRadius:8, padding:10, marginBottom:15 }
});
