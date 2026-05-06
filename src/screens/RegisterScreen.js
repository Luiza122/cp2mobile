import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
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
      <View style={{ backgroundColor: '#FFF', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: '#F8BBD0' }}>
        <Text style={{ fontSize: 28, marginBottom: 4, color: '#C2185B', fontWeight: '700' }}>Criar conta</Text>
        <Text style={{ marginBottom: 20, color: '#AD6386' }}>Preencha seus dados para continuar</Text>

        <TextInput placeholder="Nome" placeholderTextColor="#AD6386" value={name} onChangeText={setName}
          style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 10, padding: 12, borderRadius: 10, backgroundColor: '#FFF' }} />

        <TextInput placeholder="Email" placeholderTextColor="#AD6386" value={email} onChangeText={setEmail}
          autoCapitalize="none" keyboardType="email-address"
          style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 10, padding: 12, borderRadius: 10, backgroundColor: '#FFF' }} />

        <TextInput placeholder="Senha" placeholderTextColor="#AD6386" value={password} onChangeText={setPassword} secureTextEntry
          style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 16, padding: 12, borderRadius: 10, backgroundColor: '#FFF' }} />

        <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: '#E91E63', paddingVertical: 12, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{ color: '#FFF', fontWeight: '700' }}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
