import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PushNotification from 'react-native-push-notification';

const Home = () => {
  useEffect(() => {
    CreateChannels();
    getChannels();
    checkChannelExists();
    checkChannelBlocked();
  }, []);

  const CreateChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Text Channel',
    });
  };

  const getChannels = () => {
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids);
    });
  };

  const checkChannelExists = () => {
    PushNotification.channelExists('test-channel', function (exists) {
      console.log('test-channel Exists ?: ', exists);
    });
  };

  const checkChannelBlocked = () => {
    PushNotification.channelBlocked('test-channel', function (blocked) {
      console.log('test-channel Blocked?: ', blocked);
    });
  };

  const channelDelete = () => {
    //PushNotification.deleteChannel(channel_id);
  };

  const sendNotification = () => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'Hello world notificaiton',
      message: 'Hello world message',
      actions: ['Yes', 'No'],
      timeoutAfter: 9000,
      bigLargeIconUrl: 'https://www.example.tld/bigicon.jpg',
      priority: 'max',
      visibility: 'secret',
      bigText:
        'My big text that will be shown when notification is expanded. Styling can be done using HTML tags(see android docs for details)',
      //onlyAlertOnce: false,
      //channelName: 'Text Channel',
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={sendNotification}
        style={{backgroundColor: 'red', padding: 10}}>
        <Text style={{fontSize: 25, color: 'white'}}>Send notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
