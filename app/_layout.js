import { SafeAreaView, StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import { Slot } from "expo-router";

export default function AppLayout() {
  return (
    <SafeAreaView style={s.container}>
      <NativeBaseProvider>
        <Slot />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
});
