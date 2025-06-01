import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useActionState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const Pangesture = () => {
  const x = useSharedValue(10);
  const y = useSharedValue(10);
  const savedx = useSharedValue(0);
  const savedy = useSharedValue(0);

  const animatedbox = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  const handlemove = Gesture.Pan()
    .onStart(() => {
      console.log('drag started');
    })
    .onUpdate(e => {
      x.value = savedx.value + e.translationX;
      y.value = savedy.value + e.translationY;
    })
    .onEnd(() => {
      //For move and stay at where last left
        savedx.value = x.value;
        savedy.value = y.value;

      // //For move and come back to original position
      // savedx.value = withSpring(0);
      // savedy.value = withSpring(0);
      // x.value = withSpring(0);
      // y.value = withSpring(0);
    });

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={handlemove}>
        <Animated.View style={[styles.box, animatedbox]}></Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Pangesture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
});
