import {View, Text, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
const Header = () => {
  return (
    <>
      <View className="flex-row gap-3 px-5 mt-5 p-3 elevate-0">
        <View className="w-20 h-20 rounded-full">
          <Image
            source={require('../../assets/images/images/person.jpg')}
            className="w-full h-full object-contain rounded-full"
          />
        </View>
        <View className="items-start justify-start gap-1 flex-1">
          <Text className="text-[20px] font-bold text-primaryBlack">
            Hey, Melissin 👋
          </Text>
          <Text className="text-[15px] text-sans text-grey3">
            let's get started
          </Text>
        </View>
        <View className="justify-center mr-5 relative">
          <View className="w-3 h-3 rounded-full bg-red2 absolute z-10 right-0 top-8" />
          <Icon name="bell" size={30} color="#000" />
        </View>
      </View>
    </>
  );
};

export default Header;
