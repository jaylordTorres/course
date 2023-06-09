import { StyleSheet } from "react-native";
import {
  Box,
  Button,
  CheckIcon,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  VStack,
  View,
  ListItem,
  IconButton,
  ChevronLeftIcon,
} from "native-base";
import TopBar from "../../component/top_bar";
import { useRouter } from "expo-router";

const courseItems = [
  {
    id: 1,
    title: "80 degrees away from eachother, the tail end of the encapsulating",
  },
  {
    id: 2,
    title: "80 degrees away from eachother, the tail end of the encapsulating",
  },
];

export default function Detail() {
  const r = useRouter();
  return (
    <>
      <TopBar
        left={
          <IconButton onPress={r.back}>
            <ChevronLeftIcon />
          </IconButton>
        }
        title={"Course Details"}
      ></TopBar>
      <View style={{ marginHorizontal: 20 }}>
        <Image
          source={{
            uri: "https://wallpaperaccess.com/full/317501.jpg",
          }}
          alt="Alternate Text"
          size="xl"
          style={{ width: "100%" }}
        />
        <VStack space={"2"} style={{ paddingHorizontal: 20 }}>
          <HStack>
            <Button
              size={"sm"}
              borderRadius={20}
              variant={"outline"}
              style={s.infoButton}
            >
              Multple Levels
            </Button>
            <Button
              size={"sm"}
              borderRadius={20}
              variant={"outline"}
              style={s.infoButton}
            >
              6 videos
            </Button>
          </HStack>
          <HStack>
            <Text fontSize={"xl"}>
              AI/ML Tool examples part 3 - Title-Drafting Assistant
            </Text>
          </HStack>
          <Text>Course Content</Text>
          {courseItems.map((i) => (
            <HStack space={["2"]}>
              <CheckIcon size={"lg"} color={"green.500"} />
              <Text fontSize={"lg"}>{i.title}</Text>
            </HStack>
          ))}
        </VStack>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  infoButton: {
    margin: 4,
  },
});
