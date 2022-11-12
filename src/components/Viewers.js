import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';

const Viewers = ({viewersList}) => {
  if (viewersList?.length == 0) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: COLORS.lightGray2,
            ...FONTS.body4,
          }}>
          Be the first one to try this
        </Text>
      </View>
    );
  } else if (viewersList?.length <= 4) {
    return (
      <View>
        {/* profile */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            marginLeft:5
          }}>
          {viewersList?.map((item, index) => (
            <View
              key={index}
              style={{
                height: 50,
                width: 50,
                marginLeft: index == 0 ? 0 : -20,
              }}>
              <Image
                source={item.profilePic}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                }}
              />
            </View>
          ))}
        </View>

        {/* text */}

        <Text
          style={{
            textAlign: 'right',
            color: COLORS.lightGray2,
            ...FONTS.body4,
            fontWeight: 'bold',
            lineHeight: 18,
          }}>
          {viewersList?.length} people
        </Text>
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: 'right',
            ...FONTS.body4,
            lineHeight: 18,
            fontWeight: 'bold',
          }}>
          Already try this!
        </Text>
      </View>
    );
  } else {
    return (
      <View>
        {/* profile */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          {viewersList?.map((item, index) => {
            if (index < 2) {
              return (
                <View
                  key={index}
                  style={{
                    height: 50,
                    width: 50,
                    marginLeft: index == 0 ? 0 : -20,
                  }}>
                  <Image
                    source={item.profilePic}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                    }}
                  />
                </View>
              );
            }
            if (index == 2) {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    height: 50,
                    width: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    marginLeft: 10,
                    backgroundColor: COLORS.darkGreen,
                  }}>
                  <Image
                    source={item.profilePic}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                    }}
                  />
                  <Text
                    style={{
                      color: COLORS.white,
                      ...FONTS.body4,
                    }}>
                    {viewersList?.length - 3}+ ` `` `
                  </Text>
                </View>
              );
            }
          })}
        </View>

        {/* text */}
        <Text
          style={{
            textAlign: 'right',
            color: COLORS.lightGray2,
            ...FONTS.body4,
            lineHeight: 18,
          }}>
          {viewersList?.length} people
        </Text>
        <Text
          style={{
            color: COLORS.lightGray2,
            textAlign: 'right',
            ...FONTS.body4,
            lineHeight: 18,
          }}>
          Already try this!
        </Text>
      </View>
    );
  }
};

export default Viewers;
