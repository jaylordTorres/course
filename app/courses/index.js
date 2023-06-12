import { Text } from "native-base";
import TopBar from "../../component/top_bar";
import { VStack } from "native-base";
import Banner from "../../component/banner";
import ThumbCard from "../../component/tumb_card";
import { Link } from "expo-router";
import { data } from "../../values/data";

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
      <VStack

      marginX="4">
        <Banner />
        {data.map((i) => (
          <ThumbCard key={i.id} id={i.id} course={i} />
        ))}
      </VStack>
    </>
  );
}
