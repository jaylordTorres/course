import { Text } from "native-base";
import TopBar from "../../component/top_bar";
import { VStack } from "native-base";
import Banner from "../../component/banner";
import ThumbCard from "../../component/tumb_card";
import { Link } from "expo-router";

const courses = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

export default function Courses() {
  return (
    <>
      <TopBar
        title={"All Courses"}
        right={
          <Link href={"/courses/filter"}>
            <Text color={"primary.500"} fontSize={"lg"}>
              Filter
            </Text>
          </Link>
        }
      />
      <VStack justifyContent={"stretch"} marginX="4">
        <Banner />
        {courses.map((i) => (
          <ThumbCard key={i.id} id={i.id} />
        ))}
      </VStack>
    </>
  );
}
