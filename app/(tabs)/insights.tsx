import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as A } from "react-native-safe-area-context";
const SafeAreaView = styled(A);

const Insights = () => {
  return (
    <SafeAreaView>
      <Text>insights</Text>
    </SafeAreaView>
  );
};

export default Insights;
