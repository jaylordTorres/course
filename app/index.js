import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={s.container}>
      <Text style={s.head}>Welcome Course App</Text>
      <Link href="/courses" style={s.courseLink}>
        START
      </Link>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    marginBottom: 20,
    fontSize: 25,
  },
  courseLink: {
    fontSize: 25,
    fontWeight: "500",
  },
});
