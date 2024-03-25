import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import IndividualChat from '../includes/IndividualChat';
import GroupChat from '../includes/GroupChat';

interface ChatProps {
  id: number;
  groupChat: boolean;
  name: string;
  profileImage1: any;
  profileImage2: any;
  message: string;
  time: string;
  silent: boolean;
  onlineStatus: boolean;
}

const Chat = ({groupChat, item}: {groupChat: boolean; item: ChatProps}) => {
  if (groupChat) {
    return (
      <GroupChat
        id={item.id}
        name={item.name}
        profileImage1={item.profileImage1}
        profileImage2={item.profileImage2}
        message={item.message}
        time={item.time}
        silent={item.silent}
        onlineStatus={item.onlineStatus}
      />
    );
  } else {
    return (
      <IndividualChat
        id={item.id}
        name={item.name}
        profileImage1={item.profileImage1}
        message={item.message}
        time={item.time}
        silent={item.silent}
        onlineStatus={item.onlineStatus}
      />
    );
  }
};

const HomeScreen = () => {
  const [showchat, setShowchat] = React.useState([
    {
      id: 1,
      groupChat: false,
      name: 'Azrin',
      profileImage1: require('../../assets/aman.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: false,
      onlineStatus: true,
    },
    {
      id: 2,
      groupChat: true,
      name: 'Azrin',
      profileImage1: require('../../assets/aman.jpeg'),
      profileImage2: require('../../assets/azrin.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: true,
      onlineStatus: false,
    },
    {
      id: 3,
      groupChat: false,
      name: 'Azrin',
      profileImage1: require('../../assets/devid.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: true,
      onlineStatus: true,
    },
    {
      id: 4,
      groupChat: true,
      name: 'Azrin',
      profileImage1: require('../../assets/finy.jpeg'),
      profileImage2: require('../../assets/hiba.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: false,
      onlineStatus: false,
    },
    {
      id: 5,
      groupChat: false,
      name: 'Azrin',
      profileImage1: require('../../assets/isaq.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: true,
      onlineStatus: false,
    },
    {
      id: 6,
      groupChat: true,
      name: 'Azrin',
      profileImage1: require('../../assets/jerin.jpeg'),
      profileImage2: require('../../assets/promod.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: false,
      onlineStatus: false,
    },
    {
      id: 8,
      groupChat: false,
      name: 'Azrin',
      profileImage1: require('../../assets/shiya.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: true,
      onlineStatus: true,
    },
    {
      id: 9,
      groupChat: true,
      name: 'Azrin',
      profileImage1: require('../../assets/jerin.jpeg'),
      profileImage2: require('../../assets/promod.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: false,
      onlineStatus: false,
    },
    {
      id: 10,
      groupChat: false,
      name: 'Azrin',
      profileImage1: require('../../assets/shiya.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: true,
      onlineStatus: false,
    },
    {
      id: 11,
      groupChat: true,
      name: 'Azrin',
      profileImage1: require('../../assets/jerin.jpeg'),
      profileImage2: require('../../assets/promod.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: false,
      onlineStatus: true,
    },
    {
      id: 12,
      groupChat: false,
      name: 'Azrin',
      profileImage1: require('../../assets/shiya.jpeg'),
      message: '15 new messages',
      time: '5m',
      silent: true,
      onlineStatus: false,
    },
  ]);
  return (
    <View>
      {showchat.map(item => (
        <Chat key={item.id} groupChat={item.groupChat} item={item} />
      ))}
    </View>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({});
