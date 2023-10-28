import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {FONTS} from '../Theme/theme';
import normalize from '../Helper/dimen';
// create a component
const PostCard = (props: any) => {
  return (
    <View style={styles.contain}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{props.name}</Text>
        {props.verified && (
          <AntDesign name="checkcircle" size={15} color="#FFB501" />
        )}
      </View>
      <Text style={styles.desc}>{props.caption}</Text>
      <View style={styles.suggestionRow}>
        {props.tags.map((item: any) => (
          <View key={item} style={styles.suggestionVew}>
            <Text style={styles.suggestion}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  contain: {
    borderBottomWidth: 1,
    borderBlockColor: '#142340',
    paddingHorizontal: normalize(16),
    marginBottom: normalize(16),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: '#fff',
    fontSize: normalize(16),
    fontFamily: FONTS.inter_Bold,
    marginRight: normalize(10),
  },
  desc: {
    color: '#A6B6D6',
    fontFamily: FONTS.inter_Light,
    fontWeight: '300',
    marginTop: normalize(10),
  },
  suggestionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: normalize(20),
    flexWrap: 'wrap',
  },
  suggestionVew: {
    backgroundColor: '#28395A',
    height: normalize(30),
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize(10),
    marginRight: normalize(12),
    marginBottom: normalize(10),
  },
  suggestion: {
    color: '#CFD7E7',
    fontSize: normalize(12),
    fontWeight: '300',
    fontFamily: FONTS.inter_Regular,
  },
});

//make this component available to the app
export default PostCard;
