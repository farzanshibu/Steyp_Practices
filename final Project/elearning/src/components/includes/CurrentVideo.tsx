import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import VideoPlayer from 'react-native-video-player';

interface Props {
  currentUrl: string;
  handleMarkasCompleted: () => void;
}

const CurrentVideo = ({currentUrl, handleMarkasCompleted}: Props) => {
  return (
    <View>
      <VideoPlayer
        video={{
          uri: currentUrl,
        }}
        videoWidth={1600}
        videoHeight={900}
        autoplay={true}
        fullscreenAutorotate={true}
        onShowControls={() => console.log('show controls')}
        resizeMode="cover"
        disableFullscreen={true}
        showDuration={false}
        volume={80}
        onEnd={() => handleMarkasCompleted()}
        customStyles={{
          controlButton: {
            backgroundColor: 'blue',
          },
          controls: {
            backgroundColor: '#000000aa',
            height: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          },
          seekBarKnob: {
            backgroundColor: '#726AEC',
          },
          seekBar: {
            position: 'absolute',
            bottom: 50,
            width: '90%',
            left: '8%',
          },
          seekBarBackground: {
            backgroundColor: '#EAEAEA',
          },
          seekBarProgress: {
            backgroundColor: '#726AEC',
          },
          playControl: {
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
          },
          playIcon: {
            color: 'white',
            transform: [{scaleX: 2}, {scaleY: 2}],
          },
          seekBarKnobSeeking: {
            backgroundColor: '#3935AB',
          },
        }}
      />
    </View>
  );
};

export default CurrentVideo;
