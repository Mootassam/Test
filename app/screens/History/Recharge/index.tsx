import React, {useState, memo} from 'react';
import {View, FlatList} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import styles from './styles';
import SingleTask from '../../../components/SingleTask';
import SingleTransaction from '../../../components/SingleTransaction';

const Received = () => {
  const data = Array.from({length: 9}, (_, index) => ({key: String(index)}));
  const renderItem = () => <SingleTransaction />;
  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.tasksDone}
      />
    </View>
  );
};

const Send = () => {
  const data = Array.from({length: 4}, (_, index) => ({key: String(index)}));
  const renderItem = () => <SingleTransaction />;
  return (
    <View style={{height: '100%', backgroundColor: '#fff'}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.tasksDone}
      />
    </View>
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
    {key: 'Received', title: 'Received'},
    {key: 'Send', title: 'Send'},
   
  ]);

  const renderScene = SceneMap({
    Send: memo(Send),
    Received: memo(Received),
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
