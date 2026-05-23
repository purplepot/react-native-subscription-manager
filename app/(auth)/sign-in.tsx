import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/" className="bg-black text-white ">
        back
      </Link>
    </View>
  );
};

export default SignIn;
