import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ onNavigate, token }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    setLoading(true);
    fetch('https://oyna.cubemcpe.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ürünler</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity
            onPress={() => onNavigate('productform')}
            style={styles.actionButton}
          >
            <Text style={styles.actionText}>Ürün Ekle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onNavigate('profile')}
            style={styles.actionButton}
          >
            <Text style={styles.actionText}>Profil</Text>
          </TouchableOpacity>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#e91e63" />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => alert(item.name)} />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: '#f5f5f5' },
  header: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#e91e63',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
