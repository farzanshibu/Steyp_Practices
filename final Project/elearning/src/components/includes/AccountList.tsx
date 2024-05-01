import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const List = [
  {
    icon: 'document-text',
    title: 'Educational Information',
  },
  {
    icon: 'document-text',
    title: 'Payment History',
  },
  {
    icon: 'document-text',
    title: 'Change Password',
  },
  {
    icon: 'document-text',
    title: 'Privacy Policy',
  },
  {
    icon: 'document-text',
    title: 'Terms & Conditions',
  },
];

const AccountList = () => {
  const ListBuilder = ({icon, title}: {icon: string; title: string}) => {
    return (
      <View className=" bg-white flex-row p-3 mt-2 rounded-md items-center justify-between gap-3 w-11/12">
        <View className="flex-row items-center">
          <View className="p-3">
            <Icon name={icon} size={25} color="#747474" />
          </View>
          <View className="gap-3 ml-3">
            <Text className="text-h4 text-grey4 font-bold">{title}</Text>
          </View>
        </View>
        <View className="">
          <Icon name="chevron-forward" size={27} color="#747474" />
        </View>
      </View>
    );
  };

  return (
    <View className="w-full items-center  mb-10">
      {List.map((item, index) => (
        <ListBuilder key={index} icon={item.icon} title={item.title} />
      ))}
    </View>
  );
};

export default AccountList;
