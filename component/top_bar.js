import { View, StyleSheet } from "react-native";
import { Text } from "native-base";
import theme from "../values/theme";

export default function TopBar({ title, left, right }) {
  return (
    <View style={s.container}>
      <View>{left}</View>
      <Text style={s.title} color={"primary.500"} fontSize={"lg"}>
        {title}
      </Text>
      <View>{right}</View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "green",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});
