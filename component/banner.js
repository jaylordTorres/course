import { Image, View, Text } from "native-base";

export default function Banner() {
  return (
    <View>
      <Image
        source={require("../asset/bg.jpeg")}
        alt="Alternate Text"
        size="xl"
        style={{ width: "100%", height: "25vh" }}
      />
      <Text fontSize={"md"} alignSelf={"center"}>
        What do you want to learn today?
      </Text>
    </View>
  );
}
