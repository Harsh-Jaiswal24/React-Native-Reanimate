import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const Tapgesture = () => {
  const [islike, setislike] = useState(false);
  const y = useSharedValue(0);
  const sc = useSharedValue(1);
  const r = useSharedValue('0deg');

  const handleupdate = () => {
    setislike(!islike);
    y.value = withTiming(-200, {duration: 300});
    sc.value = withTiming(1.5, {duration: 150});
    r.value = withTiming('-45deg', {duration: 100}, () => {
      r.value = withTiming('45deg', {duration: 100}, () => {
        r.value = withTiming('0deg', {duration: 100});
      });
    });

    setTimeout(() => {
      y.value = withTiming(0, {duration: 300});
      sc.value = withTiming(1, {duration: 150});
    }, 300);
  };

  const animatedbox = useAnimatedStyle(() => {
    return {
      transform: [{translateY: y.value}, {scale: sc.value}, {rotate: r.value}],
    };
  });

  const handlegesture = Gesture.Tap()
    .numberOfTaps(1)
    .onEnd(() => {
      runOnJS(handleupdate)();
    });
  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={handlegesture}>
        <Animated.Image
          source={
            islike
              ? require('./public/redheart.jpg')
              : require('./public/heart.png')
          }
          style={[{height: 80, width: 80}, animatedbox]}
        />
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default Tapgesture;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: 80,
    alignItems: 'center',
    backgroundColor: 'wheat',
  },
});
