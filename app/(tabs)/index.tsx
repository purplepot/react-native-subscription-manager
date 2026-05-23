import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as A } from "react-native-safe-area-context";
const SafeAreaView = styled(A);

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="./(auth)/sign-in"
        className="bg-black text-white  rounded mt-4"
      >
        sign in
      </Link>
      <Link
        href="./(auth)/sign-up"
        className="bg-black text-white  rounded mt-4"
      >
        sign up
      </Link>
      <Link
        href="./subscriptions/netflix"
        className="bg-black text-white  rounded mt-4"
      >
        subs
      </Link>
    </SafeAreaView>
  );
}
