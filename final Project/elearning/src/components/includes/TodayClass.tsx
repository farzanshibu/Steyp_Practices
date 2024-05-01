import {
  View,
  Text,
  Image,
  type ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

interface TodayClassProps {
  image: ImageSourcePropType;
  title: string;
  precentage: number;
  navigation: any;
}

const TodayClass = ({
  image,
  title,
  precentage,
  navigation,
}: TodayClassProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('LessonScreen')}>
      <View className=" bg-white flex-row p-3 my-1 rounded-md items-center justify-between gap-3">
        <View className="h-[80px] w-[80px] bg-violet3 p-3 rounded-2xl">
          <Image
            source={image}
            className="mix-blend-screen object-contain w-full h-full "
          />
        </View>
        <View className="gap-3 w-20 ml-3">
          <Text className="text-[20px] text-secondaryBlack font-bold">
            {title}
          </Text>
          <Text
            className={`font-h4 font-bold ${
              precentage !== 100 ? 'text-violet1' : 'text-[#3ecd7a]'
            }`}>
            {precentage !== 100 ? 'Runinng...' : 'Finished'}
          </Text>
        </View>
        <View className="flex-1 px-5">
          <Progress.Bar
            progress={precentage / 100}
            width={200}
            color={precentage !== 100 ? '#726aec' : '#3ecd7a'}
            borderWidth={0}
            unfilledColor="#d9e5fc"
            height={8}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodayClass;
