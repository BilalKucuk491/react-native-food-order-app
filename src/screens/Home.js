import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../constants';
import {CategoryCard} from '../components';

const Home = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: SIZES.padding,
          flexDirection:"row",
          height: 80,
        }}>
        {/* text */}
        <View style={{flex: 1}}>
          <Text
            style={{
              color: COLORS.darkGreen,
              ...FONTS.h2,
            }}>
            Hello There!
          </Text>
          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            What you want cook today?
          </Text>
        </View>
        {/* image */}
        <TouchableOpacity
        onPress={()=> console.log("profile")}
        >
            <Image 
            source={images.profile}
            style={{
                width:50,
                height:50,
                borderRadius:25
            }}
            />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* search bar */}
            {/* see recipe card */}
            {/* trending section */}
            {/* category header section */}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              categoryItem={item}
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
        ListFooterComponent={
          <View
            style={{
              marginBottom: 100,
            }}
          />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
