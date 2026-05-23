import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as A } from "react-native-safe-area-context";
const SafeAreaView = styled(A);

const Subscriptions = () => {
  return (
    <SafeAreaView>
      <Text>Subscriptions</Text>
      <Link href="/">back</Link>
    </SafeAreaView>
  );
};

export default Subscriptions;
