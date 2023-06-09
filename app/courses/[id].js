import { StyleSheet } from "react-native";
import {
  Box,
  Button,
  CheckIcon,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
  View,
  ListItem,
  IconButton,
  ChevronLeftIcon,
} from "native-base";
import TopBar from "../../component/top_bar";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { data } from "../../values/data";
import { useMemo } from "react";
import { Image } from "expo-image";

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
  const { id } = useLocalSearchParams();

  const course = useMemo(() => {
    return data.find((i) => i.id);
  }, [data, id]);

  const tVidoes = `${course.contents.length} videos`;

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
      <View style={{ marginHorizontal: 20, paddingBottom: 150 }}>
        <Image
          source={course.photo}
          alt={course.name}
          size="xl"
          style={{ width: "100%", height: 200 }}
        />
        <VStack space={"4"} style={{ paddingHorizontal: 20 }}>
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
              {tVidoes}
            </Button>
          </HStack>
          <HStack>
            <Text fontSize={"xl"} fontWeight={"bold"}>
              {course.title}
            </Text>
          </HStack>
          <HStack>
            <Text fontSize={"lg"}>{course.description}</Text>
          </HStack>
          <Text fontSize={"lg"}>Course Content</Text>
          {course.subDescriptions.map((i) => (
            <HStack space={["2"]}>
              <CheckIcon size={"xl"} color={"green.500"} />
              <Text fontSize={"lg"}>{i.description}</Text>
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
