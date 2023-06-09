import { Image, View, Text } from "native-base";

export default function Banner() {
  return (
    <View>
      <Image
        source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg",
        }}
        alt="Alternate Text"
        size="xl"
        style={{ width: "100%" }}
      />
      <Text fontSize={"md"} alignSelf={"center"}>
        What do you want to learn today?
      </Text>
    </View>
  );
}
