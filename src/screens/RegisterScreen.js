import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { registerUser } from '../firebase/authService';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Preencha nome, email e senha.');
      return;
    }

    try {
      await registerUser(email.trim(), password);
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso.');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro ao cadastrar', error.message);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#FFF0F6' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, color: '#C2185B', fontWeight: '700' }}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#AD6386"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 10, padding: 10, borderRadius: 8, backgroundColor: '#FFF' }}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#AD6386"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 10, padding: 10, borderRadius: 8, backgroundColor: '#FFF' }}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#AD6386"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 10, padding: 10, borderRadius: 8, backgroundColor: '#FFF' }}
      />

      <Button title="Cadastrar" onPress={handleRegister} color="#E91E63" />
    </View>
  );
}
