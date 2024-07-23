import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageKey from '../constants/AsyncStorageKey';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';

export default function SplashScreen() {
  const navigation = useNavigation();
  async function checkOnboardingComplete() {
    const onboardingComplete = await AsyncStorage.getItem(
      AsyncStorageKey.onboardingComplete,
    );
    console.log(onboardingComplete);
    if (onboardingComplete === 'true') {
      navigation.replace(ScreenName.taskList);
    } else {
      navigation.replace(ScreenName.onboarding);
    }
  }
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={require('../assets/animations/to-do.json')}
        style={{flex: 1}}
        loop={false}
        onAnimationFinish={() => {
          setTimeout(() => {
            checkOnboardingComplete();
          }, 900);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
