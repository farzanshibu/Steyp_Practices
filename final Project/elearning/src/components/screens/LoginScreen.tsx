import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({navigation}: {navigation: any}) => {
  return (
    <View className="flex-1 items-center justify-center  bg-white m-5">
      <Image
        source={require('../../assets/images/images/login-page.jpg')}
        className="w-72 h-80 object-contain"
      />
      <Text className="text-h1 font-bold text-primaryBlack mb-3">
        Login to your Account
      </Text>
      <Text className="text-h3 text-grey2">Login with your phone number</Text>
      <View className="flex-row items-center mt-6 gap-2">
        <View className="flex-row items-center">
          <View className="w-20 h-24 justify-center">
            <Image
              source={require('../../assets/images/images/flag.png')}
              className="object-contain"
            />
          </View>
          <Icon name="chevron-down" size={20} />
        </View>
        <View className="flex-row border border-[#726aec] rounded-xl px-6 py-3 flex-1 items-center gap-2">
          <Icon name="phone-outline" size={22} />
          <Text className="font-black font-quanticoBold text-[20px] text-primaryBlack ">
            +91
          </Text>
          <TextInput
            className="font-black font-quanticoBold text-[20px] text-primaryBlack p-2"
            keyboardType="number-pad"
            maxLength={10}
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          //animate to left to right

          navigation.navigate('OPTScreen');
          console.log('login button');
        }}
        className="bg-[#726aec] w-full rounded-md py-5 mt-6">
        <Text className="text-h3 text-white text-center font-bold">
          Join Now
        </Text>
      </TouchableOpacity>
      <View className="flex-row justify-center items-center mt-6 gap-2">
        <Text className="text-h3 font-semibold text-grey3">
          Don't have a account?
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            console.log('Create button');
          }}>
          <Text className="text-h3 font-semibold text-violet1">
            Create an Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
