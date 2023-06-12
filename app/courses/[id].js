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
// import { WebView } from "react-native-webview";

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
          <Text fontSize={"lg"}>Course Content</Text>
          {/* {course.subDescriptions.map((i) => (
            <HStack space={["2"]}>
              <CheckIcon size={"xl"} color={"green.500"} />
              <Text fontSize={"lg"}>{i.description}</Text>
            </HStack>
          ))} */}

          <Text fontSize={"lg"}>Course Description</Text>
          <HStack>
            <Text fontSize={"lg"}>{course.description}</Text>
          </HStack>
          {/* <WebView
            style={{ flex: 1 }}
            source={{ uri: `https://www.youtube.com/embed/rxD321l2svE` }}
            javaScriptEnabled={true}
            allowsFullscreenVideo={true}
          /> */}
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
