import { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
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
      <Text style={{ fontSize: 24, marginBottom: 20, color: '#C2185B', fontWeight: '700' }}>Recuperar Senha</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#AD6386"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, borderColor: '#F48FB1', marginBottom: 10, padding: 10, borderRadius: 8, backgroundColor: '#FFF' }}
      />

      <Button title="Enviar" onPress={handleResetPassword} color="#E91E63" />
    </View>
  );
}
