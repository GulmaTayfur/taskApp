import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';
import StatusButton from './StatusButton';
import {useNavigation} from '@react-navigation/native';
import ScreenName from '../constants/ScreenName';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatDate} from '../utlis/FormatDate';

export default function TodoItem({data, onDelete}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.itemHeader}>
        <Text
          style={[
            styles.taskTitle,
            {
              textDecorationLine:
                data?.status === 'closed' ? 'line-through' : null,
            },
          ]}>
          {data?.title?.toUpperCase()}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.statusContainer,
              {
                backgroundColor:
                  data?.status === ('open' || 'progress')
                    ? '#caf6cb'
                    : '#feccb1',
              },
            ]}>
            <Text
              style={{
                color:
                  data?.status === ('open' || 'progress')
                    ? '#72966f'
                    : '#d6825c',
              }}>
              {data?.status}
            </Text>
          </View>
          <StatusButton
            iconName="pencil"
            onPress={() => navigation.navigate(ScreenName.addTask, {data})}
          />
          <StatusButton
            iconName="delete"
            color="#c0695e"
            onPress={() => onDelete()}
          />
        </View>
      </View>

      <Text style={styles.taskDescription}>{data?.description}</Text>
      <View style={styles.footerContainer}>
        <View>
          <Text>Başlangıç Tarihi</Text>
          <View style={styles.timeContainer}>
            <Icon name="clock-outline" color={colors.primary} size={15} />
            <Text style={styles.timeText}>{formatDate(data.startDate)}</Text>
          </View>
        </View>
        <View>
          <Text>Bitiş Tarihi</Text>
          <View style={styles.timeContainer}>
            <Icon name="clock-outline" color={colors.primary} size={15} />
            <Text style={styles.timeText}>{formatDate(data.endDate)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskTitle: {
    flex: 1,
    fontSize: 15,
    color: colors.text.primary,
    fontWeight: '600',
    marginBottom: 5,
  },
  statusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  taskDescription: {},
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    color: colors.primary,
    fontWeight: '600',
    marginHorizontal: 5,
    fontSize: 12,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
