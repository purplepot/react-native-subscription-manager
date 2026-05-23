import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubcriptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>Subcriptions : {id}</Text>
      <Link href="/" className="bg-black text-white ">
        back
      </Link>
    </View>
  );
};

export default SubcriptionsDetails;
