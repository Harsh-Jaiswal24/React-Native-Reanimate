import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Sharedvalueandanimatedstyle = () => {
  let x = useSharedValue(0);
  let y = useSharedValue(0);
  const animatedbox = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  const move = () => {
    {
      if (x.value == 100) {
        x.value = 0;
      } else {
        x.value = 100;
      }
    }
  };

  const movey = () => {
    {
      if (y.value == 100) {
        y.value = 0;
      } else {
        y.value = 100;
      }
    }
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedbox]}></Animated.View>

      <Pressable
        onPress={() => {
          move();
        }}>
        <Text>Move </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          movey();
        }}>
        <Text>Move Y </Text>
      </Pressable>
    </View>
  );
};

export default Sharedvalueandanimatedstyle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
});
