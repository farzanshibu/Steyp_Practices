import {View, Text, type ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
interface Props extends CardProps {
  index: number;
}
type CardProps = {title: string; image: ImageSourcePropType; progress: number};
const CourseGird = () => {
  const entries: CardProps[] = [
    {
      title: '3D Arts & Illustration',
      image: require('../../assets/images/images/ui-ux.png'),
      progress: 5,
    },
    {
      title: '3D Arts & Illustration',
      image: require('../../assets/images/images/derivation.png'),
      progress: 8,
    },
    {
      title: '3D Arts & Illustration',
      image: require('../../assets/images/images/photoshop.png'),
      progress: 2,
    },
    {
      title: '3D Arts & Illustration',
      image: require('../../assets/images/images/bussiness.png'),
      progress: 3,
    },
  ];
  const Card = ({index, title, image, progress}: Props) => {
    let color = ['#6e61e7', '#62d0e9', '#63b0e8', '#fe6f99'];
    return (
      <View
        style={{
          backgroundColor: color[index % 4],
        }}
        className=" rounded-xl p-4 w-56 h-40 gap-3">
        <Text className="text-white text-h4 font-bold">{title}</Text>
        <Text className="text-[#ffffff82] text-h4 font-bold">03 Classes</Text>
        <View className="absolute w-24 h-24 right-5 bottom-4">
          <Image source={image} className="w-full h-full object-contain" />
        </View>
        <View className="bg-[#ffffff51] p-4 w-11 rounded-xl">
          <Icon name="play" size={12} color="#fff" />
        </View>
      </View>
    );
  };
  return (
    <View className="flex flex-row flex-wrap gap-3 m-3 justify-center">
      {entries.map((entry, index) => (
        <Card key={index} {...entry} index={index} />
      ))}
    </View>
  );
};

export default CourseGird;
