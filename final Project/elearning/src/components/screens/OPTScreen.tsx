import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OPTScreen = ({navigation}: {navigation: any}) => {
  const [opt, setOpt] = useState<string>('');

  return (
    <View className="flex-1 items-center justify-center  bg-white m-5">
      <Image
        source={require('../../assets/images/images/otp-page.jpg')}
        className="object-contain scale-125 my-10"
      />
      <Text className="text-h1 font-bold text-primaryBlack mb-3">
        Verify OTP
      </Text>
      <Text className="text-h3 text-center text-grey2">
        Please enter the 4 digit verification code that is send to you at{' '}
        <Text className="text-[20px] font-semibold text-violet1">
          +91 1234567890
        </Text>
      </Text>
      <View className="items-center mt-6">
        <OTPInputView
          style={{height: 120}}
          selectionColor="#726aec"
          pinCount={4}
          code={opt as string}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeChanged={(code: string) => {
            setOpt(code);
          }}
          autoFocusOnLoad
          onCodeFilled={(code: string) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <View className="flex-row gap-2 self-end mb-8">
          <Text className="text-h4 font-semibold text-grey4">
            Don't receive code?
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              console.log('Create button');
            }}>
            <Text className="text-h4 font-semibold text-violet1">
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          //animate to left to right
          if (opt.length === 4)
            if (opt === '1234') navigation.navigate('NameScreen');
            else {
              ToastAndroid.show(
                'Invalid OTP, Please try again! with 1234',
                ToastAndroid.SHORT,
              );
            }
          console.log('login button');
        }}
        className="bg-[#726aec] w-full rounded-md py-5 mt-6">
        <Text className="text-h3 text-white text-center font-bold">Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OPTScreen;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#726aec',
  },

  underlineStyleBase: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 35,
    fontFamily: 'Quantico-Bold',
    fontWeight: 'bold',
    color: '#212236',
  },

  underlineStyleHighLighted: {
    borderColor: '#726aec',
  },
});
