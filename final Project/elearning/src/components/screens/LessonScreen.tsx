import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import CurrentVideo from '../includes/CurrentVideo';
import LessionList from '../includes/LessionList';
import PagerView from 'react-native-pager-view';

const lessons = [
  {
    id: 1,
    lesson_name: 'Lesson 1',
    total_videos: 3,
    lesson_video: [
      {
        id: 1,
        name: 'Introduction',
        time: '2:09',
        url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
      {
        id: 2,
        name: 'Getting Started',
        time: '3:10',
        url: 'https://download.samplelib.com/mp4/sample-5s.mp4',
      },
      {
        id: 3,
        name: 'Basics',
        time: '4:15',
        url: 'https://download.samplelib.com/mp4/sample-10s.mp4',
      },
    ],
  },
  {
    id: 2,
    lesson_name: 'Lesson 2',
    total_videos: 2,
    lesson_video: [
      {
        id: 4,
        name: 'Advanced Topics',
        time: '5:20',
        url: 'https://download.samplelib.com/mp4/sample-15s.mp4',
      },
      {
        id: 5,
        name: 'Deep Dive',
        time: '6:25',
        url: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4',
      },
    ],
  },
  {
    id: 3,
    lesson_name: 'Lesson 3',
    total_videos: 1,
    lesson_video: [
      {
        id: 6,
        name: 'Summary',
        time: '2:30',
        url: 'https://download.samplelib.com/mp4/sample-5s.mp4',
      },
    ],
  },
];

const LessonScreen = () => {
  const [currentvideo, setCurrentVideo] = React.useState(1);
  const [currentlesson, setCurrentLesson] = React.useState(1);
  const [currentComlpeted, setCurrentComlpeted] = React.useState(1);
  const handleMarkasCompleted = () => {
    if (currentlesson >= 4) {
      setCurrentVideo(prev => prev + 1);
      setCurrentComlpeted(prev => prev + 1);
      return console.log('All lessons completed', currentlesson);
    }
    if (currentComlpeted < lessons[currentlesson - 1].total_videos) {
      setCurrentVideo(prev => prev + 1);
      setCurrentComlpeted(prev => prev + 1);
    } else {
      setCurrentLesson(prev => prev + 1);
      setCurrentVideo(prev => prev + 1);
      setCurrentComlpeted(prev => prev + 1);
    }
  };
  const currentVideoUrl =
    'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4';
  // lessons[currentlesson - 1].lesson_video[currentvideo - 1].url;

  return (
    <View className="flex-1 justify-items-center">
      <CurrentVideo
        currentUrl={currentVideoUrl}
        handleMarkasCompleted={handleMarkasCompleted}
      />
      <View className=" flex-row mt-2 rounded-md items-center justify-between gap-3 p-3">
        <View className="gap-1 ml-3">
          <Text className="text-h2 text-primaryBlack font-bold">
            Introduction
          </Text>
          <Text className="text-h4 text-grey4">Fundamentals of maths</Text>
        </View>
        <View className="flex-row gap-2 border border-[#726AEC]  p-2 rounded-lg  items-center justify-center">
          <Icon name="checkmark-circle-outline" size={27} color="#726AEC" />
          <TouchableOpacity activeOpacity={0.8} onPress={handleMarkasCompleted}>
            <Text className="text-h5 text-[#726AEC] font-bold">
              Mark as Completed
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {lessons.map(lesson => (
          <LessionList
            {...lesson}
            key={lesson.id}
            currentlesson={currentlesson}
            currentvideo={currentvideo}
            completed={currentComlpeted}
            setCurrentVideo={setCurrentVideo}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default LessonScreen;
