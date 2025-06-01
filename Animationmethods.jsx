import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withDelay,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

const Animationmethods = () => {
  const x = useSharedValue(0);
  const animatedbox = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}],
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedbox]}></Animated.View>
      <Pressable
        onPress={() => {
          if (x.value == 0) {
            x.value = withTiming(150, {duration: 500});
          } else {
            x.value = withTiming(0, {duration: 500});
          }
        }}>
        <Text style={styles.text}>WithTiming</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          if (x.value == 0) {
            x.value = withSpring(150);
          } else {
            x.value = withSpring(0);
          }
        }}>
        <Text style={styles.text}>WithSpring</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          if (x.value == 0) {
            x.value = withDelay(500, withTiming(150, {duration: 500}));
          } else {
            x.value = withDelay(500, withTiming(0, {duration: 500}));
          }
        }}>
        <Text style={styles.text}>WithDelay</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          if (x.value == 0) {
            x.value = withRepeat(withTiming(150, {duration: 200}), -1, true);
          } else {
            x.value = withRepeat(withTiming(0, {duration: 200}), -1, true);
          }
        }}>
        <Text style={styles.text}>WithRepeate</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          if (x.value == 0) {
            x.value = withSequence(
              withTiming(50, {duration: 200}),
              withSpring(300),
              withDelay(500, withTiming(0, {duration: 200})),
            );
          } else {
            x.value = withSequence(
              withTiming(100, {duration: 200}),
              withSpring(200),
              withDelay(0, withTiming(0, {duration: 200})),
            );
          }
        }}>
        <Text style={styles.text}>WithSequence</Text>
      </Pressable>
    </View>
  );
};

export default Animationmethods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    paddingTop: 150,
    alignItems: 'center',
    backgroundColor: 'wheat',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  text: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    fontWeight: 500,
    marginTop: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
  },
});
