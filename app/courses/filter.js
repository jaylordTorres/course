import { useRouter } from "expo-router";
import {
  VStack,
  Text,
  HStack,
  Icon,
  CloseIcon,
  IconButton,
  Spacer,
  Button,
  Box,
  Radio,
  Input,
  ListItem,
} from "native-base";

const options = [
  {
    id: 1,
    title: "Dressage",
  },
  { id: 2, title: "Young horses" },
  { id: 3, title: "Care & Health" },
];

export default function FilterCourse() {
  const router = useRouter();
  return (
    <VStack backgroundColor={"red"} style={{ flex: 1, padding: 20 }}>
      <HStack
        style={{ borderBottomColor: "gray", borderBottomWidth: 0.5 }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text fontSize="lg">Category Filter</Text>
        <IconButton fontSize={"lg"} onPress={router.back}>
          <CloseIcon />
        </IconButton>
      </HStack>
      <Radio.Group>
        {options.map((o) => {
          return (
            <Radio marginY={2} size="lg" value={o.title}>
              <Text>{o.title}</Text>
            </Radio>
          );
        })}
      </Radio.Group>
      <Spacer />
      <Spacer />
      <Button onPress={router.back}>Apply</Button>
    </VStack>
  );
}
