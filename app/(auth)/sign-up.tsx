import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>SignUp</Text>
      <Link href="/" className="bg-black text-white ">
        back
      </Link>
    </View>
  );
};

export default SignUp;
