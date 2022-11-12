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
import {CategoryCard,TrendingCard} from '../components';

const Home = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: SIZES.padding,
          flexDirection: 'row',
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
        <TouchableOpacity onPress={() => console.log('profile')}>
          <Image
            source={images.profile}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSearchBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        <Image
          source={icons.search}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />

        <TextInput
          style={{marginLeft: SIZES.radius, ...FONTS.body3}}
          placeholder="Search Recipes"
          placeholderTextColor={COLORS.gray}
        />
      </View>
    );
  };

  const renderSeeRecipeCard = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}>
        {/* image */}
        <View
          style={{
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={images.recipe} style={{width: 80, height: 80}} />
        </View>
        {/* text */}
        <View style={{flex: 1, paddingVertical: SIZES.radius}}>
          <Text
            style={{
              width: '70%',
              ...FONTS.body4,
            }}>
            You have 12 recipes that you haven't tried yet{' '}
          </Text>
          <TouchableOpacity
            style={{marginTop: 10}}
            onPress={() => console.log('see recipes')}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h3,
              }}>
              See Recipesssss
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderTrendingSection = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            color: COLORS.black,
            fontWeight: 'bold',
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Trending Recipe
        </Text>

        <FlatList
          data={dummyData.trendingRecipes}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) => {
            return (
              <TrendingCard recipeItem={item}  />
            );
          }}
        />
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

            {renderSearchBar()}

            {/* see recipe card */}

            {renderSeeRecipeCard()}

            {/* trending section */}

            {renderTrendingSection()}
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
