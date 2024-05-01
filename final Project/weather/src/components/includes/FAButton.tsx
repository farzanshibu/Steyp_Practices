import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

const FAButton = (props: any) => {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};

export default FAButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    position: 'absolute',
    bottom: 10,
    right: 40,
    backgroundColor: 'green',
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
