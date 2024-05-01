import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
interface ChatProps {
  id: number;
  groupChat?: boolean;
  name: string;
  profileImage1: any;
  profileImage2?: any;
  message: string;
  time: string;
  silent: boolean;
  onlineStatus: boolean;
}
const IndividualChat = ({
  name,
  profileImage1,
  message,
  time,
  silent,
  onlineStatus,
}: ChatProps) => {
  return (
    <View style={styles.container}>
      <Image source={profileImage1} style={styles.profileImage} />
      <View style={styles.chatDetails}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.messageDetails}>
            <Text style={styles.message}>{message}</Text>
            <Text style={styles.time}>{time}</Text>
            {silent && (
              <Image
                source={require('../../assets/silent.png')}
                style={styles.silent}
              />
            )}
          </View>
        </View>
        <View style={styles.cameraDetails}>
          {onlineStatus && <View style={styles.onlineStatus} />}
          <Image
            source={require('../../assets/camera.png')}
            style={styles.camera}
          />
        </View>
      </View>
    </View>
  );
};

export default IndividualChat;

const styles = StyleSheet.create({
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  chatDetails: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    paddingBottom: 7,
  },
  messageDetails: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 5,
  },
  message: {
    color: 'white',
    marginRight: 5,
    fontSize: 18,
  },
  time: {
    color: 'gray',
    fontSize: 18,
  },
  silent: {
    width: 20,
    height: 20,
  },
  cameraDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 5,
  },
  onlineStatus: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'skyblue',
    marginRight: 5,
  },
  camera: {
    width: 30,
    height: 30,
  },
});