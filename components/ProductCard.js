import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ product, onPress }) {
  const isValidUrl = (url) =>
    typeof url === 'string' && url.startsWith('http');

  // Eğer product.image_url varsa onu kullan, yoksa id'ye göre fotoğrafı oluştur
  const imageUrl = isValidUrl(product.image_url)
    ? product.image_url
    : `http://oyna.cubemcpe.com:8000/products/${product.id}.jpg`;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price} ₺</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  price: {
    color: '#e91e63',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
