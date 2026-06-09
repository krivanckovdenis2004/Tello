import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';

export default function CodeScreen({ route, navigation }) {
  const [code, setCode] = useState('');
  const phone = route.params?.phone || 'номер телефона';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите SMS-код</Text>
      <Text style={styles.text}>Мы отправим код на: {phone}</Text>

      <TextInput
        style={styles.input}
        placeholder="123456"
        placeholderTextColor="#64748b"
        keyboardType="number-pad"
        value={code}
        onChangeText={setCode}
        maxLength={6}
      />

      <Button title="Продолжить" onPress={() => navigation.replace('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center', backgroundColor: '#0f172a' },
  title: { color: '#fff', fontSize: 30, fontWeight: '800', marginBottom: 10 },
  text: { color: '#94a3b8', fontSize: 16, marginBottom: 26 },
  input: { backgroundColor: '#1e293b', color: '#fff', padding: 18, borderRadius: 16, fontSize: 24, letterSpacing: 8, textAlign: 'center' },
});
