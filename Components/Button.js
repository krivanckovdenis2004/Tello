import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ title, onPress, secondary }) {
  return (
    <TouchableOpacity style={[styles.button, secondary && styles.secondary]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#2563eb', padding: 16, borderRadius: 16, marginTop: 12 },
  secondary: { backgroundColor: '#1e293b' },
  text: { color: '#fff', textAlign: 'center', fontSize: 17, fontWeight: '700' },
});
