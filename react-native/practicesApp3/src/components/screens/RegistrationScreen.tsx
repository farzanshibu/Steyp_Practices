import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

const RegistrationScreen = () => {
  const [success, setSuccess] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<string>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [confirmPassword, setConfirmPassword] = React.useState<string>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [errors]);

  const handleSubmit = () => {
    setLoading(true);

    if (!email || !password || !confirmPassword) {
      setErrors('Passwords and Email is Required');
      setLoading(false);

      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors('Invalid Email');
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrors('Passwords do not match');
      setLoading(false);
      return;
    }

    axios
      .post('https://traveller.talrop.works/api/v1/auth/register/', {
        email,
        password,
      })
      .then(response => {
        if (response.data.StatusCode === 6001) {
          setLoading(false);
          setSuccess(false);
          setErrors(response.data.message);
          return;
        } else {
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          setLoading(false);
          setSuccess(true);
        }
      })
      .catch(error => {
        console.error(error);
        setErrors("Something's Wrong");
        setLoading(false);
        setSuccess(false);
      });
  };
  const styleButton = () => {
    if (
      email &&
      password &&
      confirmPassword &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (password === confirmPassword) {
        return styles.buttonEnabled;
      }
    } else {
      return styles.buttonDisabled;
    }
  };
  const styleButtonText = () => {
    if (
      email &&
      password &&
      confirmPassword &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (password === confirmPassword) {
        return styles.buttonTextEnabled;
      }
    }
  };

  const successButton = () => {
    if (success) {
      return styles.successButtonEnabled;
    }
  };
  const successButtonTextEnabled = () => {
    if (success) {
      return styles.successButtonTextEnabled;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.heading}>Create Account</Text>
      <Text style={styles.subHeading}>
        Enter you personal details and start journey with us
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          keyboardType="email-address"
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          placeholder="Enter Password"
          onChangeText={text => setPassword(text)}
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={confirmPassword}
          placeholder="Re-enter Password"
          onChangeText={text => setConfirmPassword(text)}
        />
        {errors && <Text style={styles.errorText}>{errors}</Text>}
        <TouchableOpacity
          style={[styles.button, styleButton(), successButton()]}
          disabled={!(email && password && confirmPassword)}
          onPress={handleSubmit}>
          <Text
            style={[
              styles.buttonText,
              styleButtonText(),
              successButtonTextEnabled(),
            ]}>
            {loading ? (
              <ActivityIndicator />
            ) : success ? (
              'Login Success'
            ) : (
              'Register'
            )}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 200,
    backgroundColor: '#feeae8',
  },
  image: {},
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 10,
  },
  subHeading: {
    fontSize: 16,
    color: 'grey',
    width: 330,
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 13,
    marginTop: 10,
    alignSelf: 'flex-start',
    width: 400,
  },
  input: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: '#999',
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    width: 400,
    color: 'red',
  },
  button: {
    marginTop: 40,
    borderColor: 'red',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonEnabled: {
    backgroundColor: 'red',
  },
  successButtonTextEnabled: {
    color: 'white',
  },
  successButtonEnabled: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  buttonDisabled: {
    backgroundColor: 'transparent',
  },
  buttonTextEnabled: {
    color: 'white',
  },
  buttonText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
