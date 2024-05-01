import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface LessonListProps {
  id: number;
  completed: number;
  currentvideo: number;
  currentlesson: number;
  lesson_name: string;
  setCurrentVideo: React.Dispatch<React.SetStateAction<number>>;
  lesson_video: {
    id: number;
    name: string;
    time: string;
  }[];
}

const LessionList = ({
  lesson_name,
  lesson_video,
  currentvideo,
  currentlesson,
  completed,
  setCurrentVideo,
}: LessonListProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };

  const VideonameBuilder = ({
    id,
    name,
    time,
  }: {
    id: number;
    name: string;
    time: string;
  }) => {
    let iconName: string = 'lock-closed';
    const VideoIcon = () => {
      if (completed > id) {
        iconName = 'checkmark';
      }
      if (completed < id) {
        iconName = 'lock-closed';
      }
      if (completed == id) {
        iconName = 'play';
      }
    };
    VideoIcon();
    const handlePrev = () => {
      if (completed >= id) {
        setCurrentVideo(id);
      }
    };

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={handlePrev}>
        <View
          className={`flex-row p-2 m-1 mx-6 px-6 mt-2 rounded-md items-center justify-between gap-3 ${
            currentvideo === id ? 'bg-violet1' : null
          } `}>
          <View className="flex-row items-center">
            <View
              className={`p-2 border ${
                currentvideo === id ? 'border-white' : null
              }   rounded-full`}>
              <Icon
                name={iconName}
                size={14}
                color={currentvideo === id ? 'white' : '#747474'}
              />
            </View>
            <View className="gap-3 ml-3">
              <Text
                className={`text-h4 ${
                  currentvideo === id ? 'text-white' : 'text-grey4'
                } font-bold`}>
                {name}
              </Text>
            </View>
          </View>
          <View className="">
            <Text
              className={`text-h5 ${
                currentvideo === id ? 'text-white' : 'text-grey4'
              }  font-bold`}>
              {time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={handleOpen}>
        <View className=" bg-white flex-row border border-[#EAEAEA] p-3 mx-5 rounded-md items-center justify-between gap-3">
          <View className="flex-row items-center">
            <View className="ml-3">
              <Text className="text-h4 text-grey4 font-bold">
                {lesson_name}
              </Text>
            </View>
          </View>
          <Icon name="chevron-down" size={27} color="#747474" />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View>
          {lesson_video.map(video => (
            <VideonameBuilder
              key={video.id}
              id={video.id}
              name={video.name}
              time={video.time}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default LessionList;
