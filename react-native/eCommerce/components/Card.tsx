import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SpillSoldCounter from './SpillSoldCounter';
import BuyButton from './BuyButton';

const Card = (props: {
  title: string;
  price: number;
  salePrice: number;
  imageUri: string;
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={props.imageUri}
            style={{
              resizeMode: 'contain',
              width: 80,
              height: 100,
              borderRadius: 20,
            }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.heading}>{props.title}</Text>
          <Text style={styles.price}>${props.price}</Text>
          <Text style={styles.salePrice}>${props.salePrice}</Text>
          <SpillSoldCounter />
        </View>
        <BuyButton />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexBasis: 150,
    width: '100%',
    gap: 5,
    marginTop: 20,
  },
  image: {
    borderRadius: 20,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    height: '95%',
    width: '100%',
  },
  heading: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 8,
    color: 'gray',
    textDecorationLine: 'line-through',
    fontSize: 10,
  },
  salePrice: {
    color: '#eaa250',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 5,
  },
});
