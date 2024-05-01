import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';

const all_places = [
  {
    label: 'India',
    value: {
      id: 1,
      isday: undefined,
      time: undefined,
      temperature: undefined,
      weather: undefined,
      place: 'India',
      latitude: '22',
      longitude: '79',
    },
  },
  {
    label: 'United KingDom',
    value: {
      id: 2,
      isday: undefined,
      time: undefined,
      temperature: undefined,
      weather: undefined,
      place: 'United KingDom',
      latitude: '54.7584',
      longitude: '-2.6953',
    },
  },
  {
    label: 'United State',
    value: {
      id: 3,
      isday: undefined,
      time: undefined,
      temperature: undefined,
      weather: undefined,
      place: 'United State',
      latitude: '39.76',
      longitude: '-98.5',
    },
  },
  {
    label: 'Norway',
    value: {
      id: 4,
      isday: undefined,
      time: undefined,
      temperature: undefined,
      weather: undefined,
      place: 'Norway',
      latitude: '62',
      longitude: '10',
    },
  },
];

type MultiSelectComponentProps = {
  fetchData: any;
  places: any;
  setPlaces: any;
};

const MultiSelectComponent = ({
  fetchData,
  places,
  setPlaces,
}: MultiSelectComponentProps) => {
  const [] = useState([]);

  const renderItem = (item: {label: String}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={all_places}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={places}
        search
        searchPlaceholder="Search..."
        onChange={item => {
          setPlaces(item);
        }}
        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MultiSelectComponent;

const styles = StyleSheet.create({
  container: {padding: 16},
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});
