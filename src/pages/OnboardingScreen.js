import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorageKey from '../constants/AsyncStorageKey';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('screen').width;

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const handleOnboardingComplete = async () => {
    await AsyncStorage.setItem(AsyncStorageKey.onboardingComplete, 'true');
    navigation.replace('AddTask');
  };
  return (
    <View style={styles.container}>
      <View style={styles.ellipseBackground}>
        <View style={styles.inlineContainer}>
          <View style={styles.imageConatainer}>
            <Image
              source={require('../assets/images/Task2x.png')}
              style={styles.image}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footerContainer}>
            <Text style={styles.title}>Haydi İşlerini Planla</Text>
            <TouchableOpacity
              onPress={handleOnboardingComplete}
              style={styles.buttonContainer}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    alignItems: 'center',
  },
  ellipseBackground: {
    width: width,
    backgroundColor: colors.primary,
    height: '70%',
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    transform: [{scaleX: 1.5}],
  },
  inlineContainer: {
    width: width,
    height: '100%',
    position: 'absolute',
  },
  imageConatainer: {
    alignItems: 'center',
    marginTop: 110,
  },
  image: {
    height: 400,
    width: 400,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },
  title: {
    color: colors.text.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.primary,
    margin: 20,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  plus: {
    color: colors.background.primary,
    fontSize: 50,
    alignSelf: 'center',
  },
});
