import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ product, onPress }) {
  const isValidUrl = (url) => {
    return typeof url === 'string' && url.startsWith('http');
  };

  let imageUrl = '';

  if (isValidUrl(product.image_url)) {
    imageUrl = product.image_url;
  } else if (isValidUrl(product.description)) {
    imageUrl = product.description;
  } else if (product.id) {
    imageUrl = `http://oyna.cubemcpe.com:8000/products/${product.id}.jpg`;
  } else {
    imageUrl = 'http://oyna.cubemcpe.com:8000/uploads/renk.png'; // fallback resim
  }

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name} numberOfLines={1}>
        {product.name}
      </Text>
      <Text style={styles.price}>{product.price?.toFixed(2)} ₺</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    width: 160,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: '#f0f0f0',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  price: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});
