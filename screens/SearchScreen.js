import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function SearchScreen({ navigation }) {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Поиск</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите никнейм: denis"
        placeholderTextColor="#64748b"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <View style={styles.card}>
        <Text style={styles.name}>{username ? '@' + username : '@tello_user'}</Text>
        <Text style={styles.text}>Тестовый пользователь. Потом здесь будет поиск через Firebase.</Text>
        <Button title="Открыть чат" onPress={() => navigation.navigate('Chat', { user: username || 'Tello User' })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#0f172a' },
  title: { color: '#fff', fontSize: 30, fontWeight: '800', marginBottom: 18 },
  input: { backgroundColor: '#1e293b', color: '#fff', padding: 18, borderRadius: 16, fontSize: 17 },
  card: { backgroundColor: '#1e293b', padding: 18, borderRadius: 16, marginTop: 18 },
  name: { color: '#fff', fontSize: 22, fontWeight: '800' },
  text: { color: '#94a3b8', marginTop: 8, marginBottom: 8 },
});
