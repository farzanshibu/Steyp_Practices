import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const NameScreen = ({navigation}: {navigation: any}) => {
  return (
    <View className="flex-1 items-center justify-around  bg-white m-5">
      <Image
        source={require('../../assets/images/images/name-page.jpg')}
        className="w-52 h-64 object-contain mt-36"
      />
      <View className="w-full">
        <Text className="text-h1 font-bold text-center text-primaryBlack mb-3">
          Enter Your Name
        </Text>
        <Text className="text-h3 text-center text-grey2">
          Enter your full name for yout account.
        </Text>
        <View className="flex-row items-center mt-6 gap-2">
          <View className="flex-row border border-[#726aec] rounded-xl px-6 py-3 flex-1 items-center gap-2">
            <Icon name="person-outline" size={25} />
            <TextInput
              placeholder="Enter your name"
              className="text-[20px] text-grey3 pl-2"
              placeholderTextColor={'#A6A5A5'}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          //animate to left to right

          navigation.navigate('PasswordScreen');
          console.log('login button');
        }}
        className="bg-[#726aec] w-full rounded-md py-5 mt-6">
        <Text className="text-h3 text-white text-center font-bold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
