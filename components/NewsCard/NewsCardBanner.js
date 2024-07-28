import React from 'react';
import {View, Image,Text} from 'react-native';
import styles from './NewsCard.style';

const NewsCardBanner = ({banner}) => {
  return (
    <View style={styles.bannerContianer}>
      <Image style={styles.bannerImage} source={{uri: banner.imgUrl}} />
      <Text style={styles.bannerText}>{banner.description}</Text>
    </View>
  );
};

export default NewsCardBanner;
