import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
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
      <View style={{ backgroundColor: '#FFF', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: '#F8BBD0' }}>
        <Text style={{ fontSize: 28, marginBottom: 4, color: '#C2185B', fontWeight: '700' }}>Bem-vinda ✨</Text>
        <Text style={{ marginBottom: 20, color: '#AD6386' }}>Entre para acessar seus produtos</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#AD6386"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 10, padding: 12, borderRadius: 10, backgroundColor: '#FFF' }}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#AD6386"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 16, padding: 12, borderRadius: 10, backgroundColor: '#FFF' }}
        />

        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#E91E63', paddingVertical: 12, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{ color: '#FFF', fontWeight: '700' }}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{ marginTop: 14, color: '#C2185B', textAlign: 'center' }}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
          <Text style={{ marginTop: 10, color: '#C2185B', textAlign: 'center' }}>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
