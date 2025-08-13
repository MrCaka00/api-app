import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Hata', 'Kullanıcı adı ve şifre boş olamaz');
      return;
    }
    // Burada gerçek API çağrısı yapılabilir
    if (username === 'admin' && password === '12345Eac') {
      onLogin('demo-token');
    } else {
      Alert.alert('Hata', 'Kullanıcı adı veya şifre yanlış');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Şifre Unuttum',
      'Şifre sıfırlama linki mail adresinize gönderildi (demo)'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Giriş" onPress={handlePress} />
      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotBtn}>
        <Text style={styles.forgotText}>Şifremi Unuttum</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
  },
  forgotBtn: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotText: {
    color: '#e91e63',
    fontWeight: '600',
  },
});
