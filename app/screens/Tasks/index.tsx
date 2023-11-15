import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// @ts-ignore
import {Route, NavigationState} from 'react-native-tab-view/types';
import styles from './styles';
const Tasks = () => (
  <View>
    <View></View>
  </View>
);

const TasksDone = () => (
  <ScrollView>
    <View style={styles.tasksDone}>
      <View style={styles.content}></View>
    </View>
  </ScrollView>
);

const initialLayout = {width: 360};

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#F82A4F'}} // Change the color here
    style={{backgroundColor: '#252525'}} // Change the background color here
  />
);

const TabViewExample = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    {key: 'tasks', title: 'Tasks'},
    {key: 'tasksDone', title: 'Tasks Done'},
  ]);

  const renderScene = SceneMap({
    tasks: Tasks,
    tasksDone: TasksDone,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

export default TabViewExample;
