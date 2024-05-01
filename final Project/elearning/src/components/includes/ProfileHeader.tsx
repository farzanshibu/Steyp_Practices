import {View, Text, Image} from 'react-native';
import React from 'react';

const ProfileHeader = () => {
  return (
    <View className="items-center mt-20 gap-6">
      <View className="w-48 h-48 rounded-full">
        <Image
          source={require('../../assets/images/images/person.jpg')}
          className="w-full h-full object-contain rounded-full"
        />
      </View>
      <View className="items-center gap-1">
        <Text className="text-h1 font-bold text-grey3 text-center">
          Melissin Johnson
        </Text>
        <Text className="text-h4 font-bold text-grey2 text-center">
          melissinjohnson@example.com
        </Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
