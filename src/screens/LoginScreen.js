import { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { loginUser } from '../firebase/authService';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Preencha email e senha.');
      return;
    }

    try {
      await loginUser(email.trim(), password);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro ao entrar', error.message);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#FFF0F6' }}>
      <Text style={{ fontSize: 24, marginBottom: 20, color: '#C2185B', fontWeight: '700' }}>Login</Text>

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

      <Button title="Entrar" onPress={handleLogin} color="#E91E63" />

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={{ marginTop: 10, color: '#C2185B' }}>Criar conta?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
        <Text style={{ marginTop: 10, color: '#C2185B' }}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}