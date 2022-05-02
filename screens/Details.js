import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import React from 'react'
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import {
  CircleButton, RectButton, SubInfo,
  DetailsDesc, DetailsBid, FocusedStatusBar
} from "../components";

const DetailsHeader = ({data, navigation}) => (
  <View style={{ width: '100%', height:373}}>
    <Image
      source={data.image}
    />
  </View>
)

const Details = ({route, navigation}) => {
  const { data } = route.params

  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor='transparent'
        translucen={true}
      />
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5',
        zIndex: 1,
      }}>
        <RectButton midWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details