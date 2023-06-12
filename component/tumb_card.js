import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Avatar, Box, Button, HStack, Image, Text } from "native-base";
import { useRouter } from "expo-router";
import Link from "./link";

export default function ThumbCard({ id, course }) {
  return (
    <Link href={"/courses/" + id}>
      <View style={s.container}>
        <Image
          source={course.photo}
          alt={course.name}
          size="xl"
          style={{ width: "100%", height: 150 }}
        />
        <Text
          fontSize={"xl"}
          marginTop={"2"}
          marginBottom={"2"}
          fontWeight={"500"}
        >
          {course.title}
        </Text>
        {/* <HStack alignItems={"center"} space={"4"}>
          <Avatar
            size={"md"}
            bg="green.500"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          >
            AJ
          </Avatar>
          <Text>Author</Text>
        </HStack> */}
      </View>
    </Link>
  );
}

const s = StyleSheet.create({
  container: { marginVertical: 20, overflow: "hidden", borderRadius: 10 },
});
