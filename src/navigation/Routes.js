import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenName from '../constants/ScreenName';
import SplashScreen from '../pages/SplashScreen';
import TaskListScreen from '../pages/TaskListScreen';
import OnboardingScreen from '../pages/OnboardingScreen';
import colors from '../themes/Colors';
import AddTaskScreen from '../pages/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background.primary,
        },
        headerTintColor: colors.text,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={ScreenName.splash}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ScreenName.taskList}
        component={TaskListScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ScreenName.onboarding}
        component={OnboardingScreen}
      />
      <Stack.Screen name={ScreenName.addTask} component={AddTaskScreen} />
    </Stack.Navigator>
  );
}
