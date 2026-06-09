import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function ProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Создай профиль</Text>
      <Text style={styles.text}>Имя и никнейм нужны, чтобы тебя могли найти.</Text>

      <TextInput style={styles.input} placeholder="Имя" placeholderTextColor="#64748b" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Никнейм, например denis" placeholderTextColor="#64748b" value={username} onChangeText={setUsername} autoCapitalize="none" />

      <Button title="Готово" onPress={() => navigation.replace('Home', { name, username })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#0f172a' },
  title: { color: '#fff', fontSize: 32, fontWeight: '800' },
  text: { color: '#94a3b8', fontSize: 16, marginTop: 8, marginBottom: 28 },
  input: { backgroundColor: '#1e293b', color: '#fff', padding: 18, borderRadius: 16, fontSize: 17, marginBottom: 14 },
});
