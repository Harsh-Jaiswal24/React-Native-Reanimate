import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const MasteringTransform = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const rx = useSharedValue('0deg');
  const ry = useSharedValue('0deg');
  const rz = useSharedValue('0deg');
  const s = useSharedValue(1);
  const skew = useSharedValue('0deg');
  const animatedbox = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: x.value},
        {translateY: y.value},
        {rotateX: rx.value},
        {rotateY: ry.value},
        {rotateZ: rz.value},
        {scale: s.value},
        // {skewX:skew.value}
        {skewY: skew.value},
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedbox]} />

      <View style={{marginTop: 20, gap: 5}}>
        <Pressable
          style={styles.btns}
          onPress={() => {
            y.value = withTiming(100, {duration: 500});
          }}>
          <Text>Move Down</Text>
        </Pressable>
        <Pressable
          style={styles.btns}
          onPress={() => {
            y.value = withTiming(0);
          }}>
          <Text>Move Up</Text>
        </Pressable>
        <Pressable
          style={styles.btns}
          onPress={() => {
            x.value = withTiming(100);
          }}>
          <Text>Move Right</Text>
        </Pressable>
        <Pressable
          style={styles.btns}
          onPress={() => {
            x.value = withTiming(0);
          }}>
          <Text>Move Left</Text>
        </Pressable>
        <Pressable
          style={styles.btns}
          onPress={() => {
            rx.value = withTiming('180deg');
          }}>
          <Text>Rotate X</Text>
        </Pressable>
        <Pressable
          style={styles.btns}
          onPress={() => {
            ry.value = withTiming('250deg');
          }}>
          <Text>Rotate Y</Text>
        </Pressable>
        <Pressable
          style={styles.btns}
          onPress={() => {
            rz.value = withSpring('40deg');
          }}>
          <Text>Rotate Z</Text>
        </Pressable>
        <Pressable
          style={styles.btns}
          onPress={() => {
            s.value = withTiming(5, {duration: 400});
          }}>
          <Text>Scale</Text>
        </Pressable>
        <Pressable
          style={styles.btns}
          onPress={() => {
            skew.value = withTiming('45deg');
          }}>
          <Text>skew</Text>
        </Pressable>
        <Pressable
          style={styles.btns}
          onPress={() => {
            skew.value = withTiming('45deg');
            rx.value = withSpring('180deg', {duration: 5000});
            x.value = withSpring(50, {duration: 1000});
            y.value = withSpring(500);
          }}>
          <Text>combination</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MasteringTransform;

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
  btns: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 5,
  },
});
