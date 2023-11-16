import React, {useState, memo} from 'react';
import {View, FlatList} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styles from './styles';
import SingleTask from '../../components/SingleTask';

const Tasks = () => {
  const data = Array.from({length: 9}, (_, index) => ({key: String(index)}));

  const renderItem = () => <SingleTask />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.tasksDone}
    />
  );
};

const TasksDone = () => {
  const data = Array.from({length: 4}, (_, index) => ({key: String(index)}));

  const renderItem = () => <SingleTask />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.key}
      contentContainerStyle={styles.tasksDone}
    />
  );
};

const renderTabBar = (props: any) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#F82A4F'}}
    style={{backgroundColor: '#252525'}}
  />
);

const TabViewExample = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'tasks', title: 'Tasks'},
    {key: 'tasksDone', title: 'Tasks Done'},
  ]);

  const renderScene = SceneMap({
    tasks: memo(Tasks),
    tasksDone: memo(TasksDone),
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};

export default TabViewExample;
