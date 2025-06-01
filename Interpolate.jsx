import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const Interpolate = () => {
  const x = useSharedValue(0);
  const animatedbox = useAnimatedStyle(() => {
    //interpolate(value, inputarray, outputarray,boundation)
    const opacity = interpolate(x.value, [0, 250], [1, 0], Extrapolation.CLAMP);
    const height = interpolate(
      x.value,
      [0, 20, 50, 100],
      [100, 60, 30, 0],
      Extrapolation.CLAMP,
    );
    return {
      transform: [{translateX: x.value}],
      opacity,
      height,
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedbox]}></Animated.View>
      <Pressable
        onPress={() => {
          if (x.value == 0) {
            x.value = withTiming(150, {duration: 400});
          } else {
            x.value = withTiming(0, {duration: 500});
          }
        }}>
        <Text>Interpolate</Text>
      </Pressable>
    </View>
  );
};

export default Interpolate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: 'wheat',
  },
  box: {
    height: 80,
    width: 80,
    marginBottom: 50,
    backgroundColor: 'red',
  },
});
