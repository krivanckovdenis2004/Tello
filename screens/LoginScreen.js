import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Button from '../components/Button';

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View>
        <Text style={styles.logo}>TELLO</Text>
        <Text style={styles.subtitle}>Общайся без границ</Text>

        <TextInput
          style={styles.input}
          placeholder="+7 999 123 45 67"
          placeholderTextColor="#64748b"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <Button title="Получить код" onPress={() => navigation.navigate('Code', { phone })} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#0f172a' },
  logo: { color: '#fff', fontSize: 52, fontWeight: '900', textAlign: 'center' },
  subtitle: { color: '#94a3b8', fontSize: 17, textAlign: 'center', marginTop: 12, marginBottom: 46 },
  input: { backgroundColor: '#1e293b', color: '#fff', padding: 18, borderRadius: 16, fontSize: 18 },
});
