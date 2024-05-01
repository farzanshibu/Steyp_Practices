import {View, Text} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends CardProps {
  index: number;
}
``;
type CardProps = {title: string; progress: number; timespent: number};
const CourseGird = () => {
  const entries: CardProps[] = [
    {
      title: '3D Arts & Illustration',
      progress: 50,
      timespent: 3,
    },
    {
      title: '3D Arts & Illustration',
      progress: 80,
      timespent: 3,
    },
    {
      title: '3D Arts & Illustration',
      progress: 20,
      timespent: 3,
    },
    {
      title: '3D Arts & Illustration',
      progress: 30,
      timespent: 3,
    },
  ];
  const Card = ({index, title, progress}: Props) => {
    let color = ['#6e61e7', '#62d0e9', '#63b0e8', '#fe6f99'];
    return (
      <View
        style={{
          backgroundColor: color[index % 4],
          marginLeft: 10,
          marginTop: 10,
        }}
        className=" rounded-xl p-4 w-56 h-32 gap-1">
        <Text className="text-white text-h4 font-bold">{title}</Text>
        <Text className="text-[#ffffff82] text-h4 font-bold">03 Classes</Text>
        <View className="py-4 flex-row items-center gap-3">
          <Text className="text-white text-h4 font-bold"> {progress}%</Text>
          <View className="justify-centers">
            <Progress.Bar
              progress={progress / 100}
              width={120}
              color={50 ? '#eaeaea' : '#3ecd7a'}
              borderWidth={0}
              unfilledColor="#cccdfa67"
              height={8}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View className="h-40">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: 15,
        }}>
        {entries.map((entry, index) => (
          <Card key={index} {...entry} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CourseGird;
