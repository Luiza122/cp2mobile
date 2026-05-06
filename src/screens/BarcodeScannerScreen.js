import { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function BarcodeScannerScreen({ navigation, route }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  const formData = route.params?.formData || {};

  function handleBarcodeScanned({ data }) {
    if (scanned) return;

    setScanned(true);

    Alert.alert("Código lido", data, [
      {
        text: "OK",
        onPress: () => {
          navigation.navigate("Home", {
            scannedBarcode: data,
            formData,
          });
        },
      },
    ]);
  }

  if (!permission) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#FFF0F6" }}>
        <Text style={{ color: "#C2185B" }}>Carregando permissões da câmera...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#FFF0F6" }}>
        <View style={{ backgroundColor: "#FFF", borderRadius: 16, padding: 20, borderWidth: 1, borderColor: "#F8BBD0" }}>
          <Text style={{ fontSize: 20, marginBottom: 20, textAlign: "center", color: "#C2185B" }}>
            Precisamos da permissão da câmera para ler o código de barras.
          </Text>

          <TouchableOpacity onPress={requestPermission} style={{ backgroundColor: "#E91E63", paddingVertical: 12, borderRadius: 10, alignItems: "center" }}>
            <Text style={{ color: "#FFF", fontWeight: "700" }}>PERMITIR CÂMERA</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF0F6" }}>
      <View style={{ flex: 1 }}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        />
      </View>

      <View style={{ padding: 20, backgroundColor: "#FFF0F6" }}>
        <Text style={{ fontSize: 20, marginBottom: 10, color: "#C2185B", fontWeight: "700" }}>
          Leitor de Código de Barras
        </Text>

        <Text style={{ marginBottom: 20, color: "#880E4F" }}>
          Aponte a câmera para um código de barras.
        </Text>

        {scanned && (
          <TouchableOpacity onPress={() => setScanned(false)} style={{ backgroundColor: "#E91E63", paddingVertical: 12, borderRadius: 10, alignItems: "center" }}>
            <Text style={{ color: "#FFF", fontWeight: "700" }}>LER NOVAMENTE</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
