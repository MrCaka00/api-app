import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  Text,
} from 'react-native';

export default function ProductFormScreen({ onNavigate }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!name || !price) {
      Alert.alert('Hata', 'Ürün adı ve fiyatı zorunludur.');
      return;
    }

    const productData = {
      name,
      price: parseFloat(price),
      image_url: imageUrl,
      description,
    };

    fetch('https://oyna.cubemcpe.com/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Ürün eklenemedi');
        return res.json();
      })
      .then(() => {
        Alert.alert('Başarılı', 'Ürün başarıyla eklendi.');
        onNavigate('home');
      })
      .catch(() => Alert.alert('Hata', 'Ürün eklenirken hata oluştu.'));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Yeni Ürün Ekle</Text>
      <TextInput
        placeholder="Ürün Adı"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Fiyat (₺)"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Resim URL'si"
        style={styles.input}
        value={imageUrl}
        onChangeText={setImageUrl}
      />
      <TextInput
        placeholder="Açıklama"
        style={[styles.input, { height: 100 }]}
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Ürünü Kaydet" onPress={handleSubmit} />
      <View style={{ marginTop: 10 }}>
        <Button title="Geri Dön" onPress={() => onNavigate('home')} color="#777" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
});
