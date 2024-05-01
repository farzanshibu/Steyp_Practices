import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Feather';
import PasswordValidate from 'react-native-password-validate-checklist';

const PasswordScreen = ({navigation}: {navigation: any}) => {
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [validated, setValidated] = useState(false);
  return (
    <View className="flex-1 items-center justify-center bg-white m-5">
      <Image
        source={require('../../assets/images/images/password-page.jpg')}
        className="w-80 object-contain mb-14"
      />
      <View className="w-full">
        <Text className="text-h1 font-bold text-center text-primaryBlack mb-3">
          Set a Strong Password
        </Text>
        <Text className="text-h3 text-center text-grey2">
          Set a stroong password for your account.
        </Text>
        <View className="flex h-20 justify-center mt-6 gap-2 mb-7">
          <View className="flex-row border border-[#726aec] rounded-xl px-6 py-3 flex-1 items-center gap-2">
            <SimpleLineIcons name="lock" size={25} />
            <TextInput
              placeholder="*********"
              className="text-[20px] text-grey3 pl-2 flex-1"
              placeholderTextColor={'#676767'}
              value={password}
              onChangeText={text => setPassword(text)}
              maxLength={16}
              secureTextEntry={showPassword}
            />
            <Icon.Button
              color={'#A6A5A5'}
              backgroundColor="transparent"
              activeOpacity={0.8}
              underlayColor={'transparent'}
              name={showPassword ? 'eye-off' : 'eye'}
              size={25}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
        </View>

        <Text
          className={`font-bold text-h3 ${
            validated ? 'text-violet1' : 'text-red2'
          } `}>
          {validated
            ? 'Password meets requirements.'
            : "Password doesn't meet requirements."}
        </Text>
        <PasswordValidate
          containerStyle={{width: '100%'}}
          newPassword={password}
          validationRules={[
            {
              key: 'MIN_LENGTH',
              ruleValue: 8,
              label: 'Should contain more than 8 characters',
            },
            {
              key: 'LOWERCASE_LETTER',
              label: 'Password contains at least one LowerCase letter',
            },
            {
              key: 'UPPERCASE_LETTER',
              label: 'Password contains at least one UpperCase letter',
            },
            {
              key: 'NUMERIC',
              label: 'Password contains at least one Number',
            },
            {
              key: 'SPECIAL_CHARS',
              label: 'Password contains at least one Special Symbol',
            },
          ]}
          onPasswordValidateChange={(
            validatedBoolean: boolean | ((prevState: boolean) => boolean),
          ) => setValidated(validatedBoolean)}
          isImage={false}
          iconComponent={{
            Success: (
              <Fontisto name="radio-btn-active" size={25} color={'#726AEC'} />
            ),
            Error: (
              <Fontisto name="radio-btn-passive" size={25} color={'#A6A5A5'} />
            ),
          }}
          labelStyle={{
            Success: {color: '#726AEC', fontSize: 16},
            Error: {color: '#A6A5A5', fontSize: 16},
          }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          //animate to left to right
          if (validated) navigation.navigate('HomeStack');
          console.log('login button');
        }}
        className="bg-[#726aec] w-full rounded-md py-5 mt-6">
        <Text className="text-h3 text-white text-center font-bold">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
