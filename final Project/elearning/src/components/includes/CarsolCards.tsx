import {
  View,
  Text,
  Image,
  TouchableOpacity,
  type ImageSourcePropType,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import * as Progress from 'react-native-progress';
import Carousel from 'react-native-reanimated-carousel';

interface CarouselCardProps {
  title: string;
  precentage: number;
  image: ImageSourcePropType;
}

const entries: CarouselCardProps[] = [
  {
    title: '3D Arts & Illustration',
    image: require('../../assets/images/images/3d-art-illution.png'),
    precentage: 50,
  },
  {
    title: '3D Arts & Illustration',
    image: require('../../assets/images/images/3d-art-illution.png'),
    precentage: 80,
  },
  {
    title: '3D Arts & Illustration',
    image: require('../../assets/images/images/3d-art-illution.png'),
    precentage: 20,
  },
  {
    title: '3D Arts & Illustration',
    image: require('../../assets/images/images/3d-art-illution.png'),
    precentage: 30,
  },
  {
    title: '3D Arts & Illustration',
    image: require('../../assets/images/images/3d-art-illution.png'),
    precentage: 10,
  },
];

const CarsolCards = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const width = Dimensions.get('window').width;

  interface DotIndicatorProps {
    numberOfDots: number;
  }

  const DotIndicator = ({numberOfDots}: DotIndicatorProps) => {
    const dotWidths = useRef(
      Array.from({length: numberOfDots}).map(() => new Animated.Value(3)),
    ).current;

    const animateDot = (index: number, targetWidth: number) => {
      Animated.timing(dotWidths[index], {
        toValue: targetWidth,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };

    useEffect(() => {
      // Reduce the width of the previously selected dot
      dotWidths.forEach((dotWidth, index) => {
        const isNotCurrent = index !== currentIndex;
        if (isNotCurrent) {
          animateDot(index, 8); // Set to default width if not current
        }
      });

      // Increase the width of the newly selected dot
      animateDot(currentIndex, 29); // Current dot becomes wider
    }, [currentIndex]);

    return (
      <View className="flex-row justify-center items-center mt-3">
        {dotWidths.map((dotWidth, index) => (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {
                width: index === currentIndex ? dotWidth : 8,
                backgroundColor: index === currentIndex ? '#726AEC' : '#a6a8ff',
              },
            ]}
          />
        ))}
      </View>
    );
  };

  const styles = StyleSheet.create({
    dot: {
      height: 8,
      borderRadius: 4,
      marginHorizontal: 4,
    },
  });

  const CurrentIndexInicator = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View className="flex-1">
      <Carousel
        loop
        width={width}
        height={width / 2}
        data={entries}
        onSnapToItem={index => CurrentIndexInicator(index)}
        renderItem={({index, item}) => (
          <View className="flex-row m-4 rounded-[40px] bg-[#6367e9] p-6">
            <View className="w-3/5 justify-around">
              <Text className="text-grey1 text-h4">
                {item.precentage !== 100 ? 'Ongoing' : 'Completed'}
              </Text>
              <Text className="text-grey1 text-[21px] font-bold">
                {item.title}
              </Text>
              <View className="flex-row gap-5">
                <Text className="text-grey1 text-h4">{item.precentage}%</Text>
                <View className="justify-center">
                  <Progress.Bar
                    progress={item.precentage / 100}
                    width={140}
                    color={50 ? '#eaeaea' : '#3ecd7a'}
                    borderWidth={0}
                    unfilledColor="#cccdfa67"
                    height={8}
                  />
                </View>
              </View>
              <TouchableOpacity className="justify-center items-center bg-[#cccdfa49] rounded-full px-2 py-3 w-36">
                <Text className="text-grey1 font-semibold text-h3">
                  Contiune
                </Text>
              </TouchableOpacity>
            </View>
            <View className="w-2/5 h-48 items-center justify-center overflow-visible">
              <Image
                source={item.image}
                className="w-full h-full object-contain overflow-visible"
              />
            </View>
          </View>
        )}
      />
      <DotIndicator numberOfDots={entries.length} />
    </View>
  );
};

export default CarsolCards;
