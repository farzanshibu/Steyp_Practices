import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Header from './components/Header';
import Banner from './components/Banner';
import SpillCard from './components/SpillCard';
import Card from './components/Card';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header />

        <Banner />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 10,
          }}
          style={{
            marginTop: 40,
            padding: 10,
            height: 90,
            width: '100%',
          }}>
          <SpillCard title="Electronics" />
          <SpillCard title="Fashion" />
          <SpillCard title="Sports" />
          <SpillCard title="Electric" />
          <SpillCard title="Electronics" />
          <SpillCard title="Fashion" />
          <SpillCard title="Sports" />
          <SpillCard title="Electric" />
        </ScrollView>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
          }}
          style={{
            width: '100%',
          }}>
          <Card
            title="HoMen Regular Shirt"
            price={100}
            salePrice={50}
            imageUri={require('./assets/images/shirt.jpg')}
          />
          <Card
            title="Puma Backpack"
            price={100}
            salePrice={50}
            imageUri={require('./assets/images/bag.jpg')}
          />
          <Card
            title="Solid Casual TShirt"
            price={100}
            salePrice={50}
            imageUri={require('./assets/images/tshirt.jpg')}
          />
          <Card
            title="Nike Shoe"
            price={100}
            salePrice={50}
            imageUri={require('./assets/images/shoe.jpg')}
          />
          <Card
            title="HoMen Regular Shirt"
            price={100}
            salePrice={50}
            imageUri={require('./assets/images/shirt.jpg')}
          />
          <Card
            title="Puma Backpack"
            price={100}
            salePrice={50}
            imageUri={require('./assets/images/bag.jpg')}
          />
          <Card
            title="Solid Casual TShirt"
            price={100}
            salePrice={50}
            imageUri={require('./assets/images/tshirt.jpg')}
          />
          <Card
            title="Nike Shoe"
            price={100}
            salePrice={50}
            imageUri={require('./assets/images/shoe.jpg')}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  text: {
    color: 'black',
  },
});

export default App;
