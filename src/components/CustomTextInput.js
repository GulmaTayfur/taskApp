import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../themes/Colors';
import {formatDate} from '../utlis/FormatDate';

export default function CustomTextInput({
  imageSource,
  onChangeText,
  value,
  style,
  onPressIcon,
  label,
  isDate,
  ...rest
}) {
  return (
    <TouchableOpacity
      disabled={onPressIcon ? false : true}
      onPress={() => onPressIcon()}
      style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Image source={imageSource} style={styles.image} />
        {!onPressIcon ? (
          <TextInput
            value={value}
            {...rest}
            onChangeText={onChangeText}
            style={styles.textInput}
          />
        ) : (
          <Text style={styles.date}>
            {value && formatDate(value?.toString())}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 15,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
  },
  label: {
    fontSize: 15,
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: 5,
  },
  date: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.black,
  },
});
