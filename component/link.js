import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Link({ children, href }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => {
        router.push(href);
      }}
    >
      {children}
    </TouchableOpacity>
  );
}
