import React from 'react';
import {SafeAreaView, ScrollView, Text, FlatList, View} from 'react-native';
import news_data from './news_data.json';
import   news_banner_data from './news_banner_data.json';
import NewsCard from './NewsCard';
import styles from './NewsCard/NewsCard.style'
import NewsCardBanner from './NewsCard/NewsCardBanner';

const News = () => {

  const renderNews =  ({item}) => <NewsCard news={item} />
  const renderHeader = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {
        news_banner_data.map((banner) =>(
          <NewsCardBanner key={banner.id} banner={banner} />
        ))
      }
    </ScrollView>
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.appTitle}>News App</Text>
        <FlatList
         ListHeaderComponent={renderHeader}
        data={news_data}
        renderItem={renderNews}
        keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default News;
