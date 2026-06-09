import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

const chats = [
  { id: '1', name: 'Алексей', last: 'Привет, как дела?' },
  { id: '2', name: 'Мария', last: 'Созвонимся позже?' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Найти человека по никнейму" onPress={() => navigation.navigate('Search')} />
      <Text style={styles.heading}>Чаты</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('Chat', { user: item.name })}>
            <View style={styles.avatar}><Text style={styles.avatarText}>{item.name[0]}</Text></View>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.last}>{item.last}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, backgroundColor: '#0f172a' },
  heading: { color: '#fff', fontSize: 24, fontWeight: '800', marginTop: 28, marginBottom: 12 },
  chat: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1e293b', padding: 14, borderRadius: 16, marginBottom: 12 },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#2563eb', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { color: '#fff', fontSize: 20, fontWeight: '800' },
  name: { color: '#fff', fontSize: 17, fontWeight: '700' },
  last: { color: '#94a3b8', marginTop: 4 },
});
