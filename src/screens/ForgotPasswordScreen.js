import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { resetUserPassword } from '../firebase/authService';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  async function handleResetPassword() {
    if (!email.trim()) {
      Alert.alert('Atenção', 'Informe seu email.');
      return;
    }

    try {
      await resetUserPassword(email.trim());
      Alert.alert(
        'Email enviado',
        'Enviamos as instruções de recuperação de senha para seu email.'
      );
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro ao enviar email', error.message);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#FFF0F6' }}>
      <View style={{ backgroundColor: '#FFF', borderRadius: 16, padding: 20, borderWidth: 1, borderColor: '#F8BBD0' }}>
        <Text style={{ fontSize: 28, marginBottom: 4, color: '#C2185B', fontWeight: '700' }}>Recuperar senha</Text>
        <Text style={{ marginBottom: 20, color: '#AD6386' }}>Digite seu email para receber o link</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#AD6386"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 16, padding: 12, borderRadius: 10, backgroundColor: '#FFF' }}
        />

        <TouchableOpacity onPress={handleResetPassword} style={{ backgroundColor: '#E91E63', paddingVertical: 12, borderRadius: 10, alignItems: 'center' }}>
          <Text style={{ color: '#FFF', fontWeight: '700' }}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
