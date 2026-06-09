import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function ChatScreen({ route }) {
  const user = route.params?.user || 'Пользователь';
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', fromMe: false, text: `Чат с ${user} открыт` },
  ]);

  const send = () => {
    if (!text.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), fromMe: true, text }]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.fromMe ? styles.me : styles.other]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="Сообщение" placeholderTextColor="#64748b" value={text} onChangeText={setText} />
        <TouchableOpacity style={styles.send} onPress={send}><Text style={styles.sendText}>➤</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 14, backgroundColor: '#0f172a' },
  bubble: { padding: 12, borderRadius: 14, marginVertical: 6, maxWidth: '80%' },
  me: { backgroundColor: '#2563eb', alignSelf: 'flex-end' },
  other: { backgroundColor: '#1e293b', alignSelf: 'flex-start' },
  messageText: { color: '#fff', fontSize: 16 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 10 },
  input: { flex: 1, backgroundColor: '#1e293b', color: '#fff', padding: 14, borderRadius: 16, fontSize: 16 },
  send: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#2563eb', alignItems: 'center', justifyContent: 'center' },
  sendText: { color: '#fff', fontSize: 20, fontWeight: '800' },
});
