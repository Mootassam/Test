import {TouchableWithoutFeedback, Linking} from 'react-native';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Images} from '../../../config/images';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import contactActions from '../../modules/contact/contactActions';
import contactSelectors from '../../modules/contact/contactSelectors';
function Team() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactActions.doFetch());
  }, [dispatch]);
  const loading = useSelector(contactSelectors.loading);
  const record = useSelector(contactSelectors.record);

  const navigateToApp = (appName, number) => {
    switch (appName) {
      case 'WhatsApp':
        // Example: Open WhatsApp with the provided number
        Linking.openURL(`whatsapp://send?phone=${number}`);
        break;
      case 'Telegram':
        // Example: Open Telegram with the provided number
        Linking.openURL(`tg://resolve?domain=${number}`);
        break;
      case 'Email':
        // Example: Open default Email app with the provided email address
        Linking.openURL(`mailto:${number}`);
        break;
      case 'SMS':
        // Example: Open default SMS app with the provided number
        Linking.openURL(`sms:${number}`);
        break;
      default:
        console.log('Invalid app name');
    }
  };

  const rengerImage = item => {
    let path;
    if (item.name === 'WhatsApp') {
      return (path = Images.whatsapp);
    } else if (item.name === 'Telegram') {
      return (path = Images.telegram);
    } else if (item.name === 'Email') {
      return (path = Images.email);
    } else if (item.name === 'SMS') {
      return (path = Images.sms);
    }
    return path;
  };

  const renderItem = () => {
    return (
      <View style={styles.sharelinks}>
        {record.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigateToApp(item.name, item.number)}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
              }}>
              <FastImage
                source={rengerImage(item)}
                resizeMode={FastImage.resizeMode.contain}
                style={{width: 50, height: 50}}
              />
              <Text style={styles.textwhite}>{item.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.content}>
        <View style={styles.boxContent}>
          <View style={styles.box}>
            <View style={styles.boxIcon}>
              <FastImage
                source={Images.costumer}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.textIcon}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>1.2M </Text>
                Happy Customers
              </Text>
            </View>
            <View style={styles.boxIcon}>
              <FastImage
                source={Images.ontime}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.textIcon}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>99%</Text>
                On Time Delivery
              </Text>
            </View>
            <View style={styles.boxIcon}>
              <FastImage
                source={Images.quality}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.textIcon}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  10 Years{' '}
                </Text>
                of Experience
              </Text>
            </View>
            <View style={styles.boxIcon}>
              <FastImage
                source={Images.review}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.textIcon}>Top Reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.boxContent}>
          <View style={styles.box}>
            <View>
              <FastImage
                source={Images.qf}
                style={styles.iconqf}
                resizeMode="contain"
              />
              <View style={styles.meduimbox}>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text ellipsizeMode="tail" style={{maxWidth: 300}}>
                    24 to 72 working hours delivery time guarantee.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text ellipsizeMode="tail" style={{maxWidth: 300}}>
                    We are available 24x7 on Chat / WhatsApp / Phone / Email /
                    Skype to assist you.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text ellipsizeMode="tail" style={{maxWidth: 300}}>
                    Prompt notifications on every stage via on Email and
                    WhatsApp.
                  </Text>
                </View>

                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text ellipsizeMode="tail" style={{maxWidth: 300}}>
                    We will also be your sponsor. So no additional sponsor is
                    required.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boxContent}>
          <View style={styles.box}>
            <View>
              <Text style={styles.invitationLink}>
                THINGS TO BE DONE ONCE YOU REACH
              </Text>
              <FastImage
                source={Images.banner}
                resizeMode="contain"
                style={{width: '100%', height: 260}}
              />
              <View style={styles.meduimbox}>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text ellipsizeMode="tail" style={{maxWidth: 300}}>
                    Be sure you are not carrying any item that is not allowed to
                    pass through customs including books, videotapes, etc.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text ellipsizeMode="tail" style={{maxWidth: 300}}>
                    Keep a copy of your document or the original one with you
                    while roaming.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text>
                    Ensure to remember & note all the emergency numbers.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text>Keep in mind all the rules and regulations.</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boxContent}>
          <View style={styles.box}>
            <View>
              <Text style={styles.invitationLink}>
                What you can do while you plan and travel:
              </Text>
              <View style={styles.meduimbox}>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text>Let your device rest at home while you holiday</Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text>Try to choose a destination close to your home</Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text>Travel light, Travel right</Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text ellipsizeMode="tail" style={{maxWidth: 300}}>
                    Visit places where you can contribute to the environment and
                    its beings
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text>Opt for green transport options</Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text ellipsizeMode="tail" style={{maxWidth: 340}}>
                    Respect the space of all the beings already living in your
                    dream destination
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Icon name="check" color="green" />
                  <Text ellipsizeMode="tail" style={{maxWidth: 340}}>
                    Follow the rules and regulations of the native country to
                    receive hospitality
                  </Text>
                </View>
                <Text ellipsizeMode="tail" style={{maxWidth: 340}}>
                  The planet belongs to all of us. Each one has the privilege to
                  contribute to a better world. We all can leave a better planet
                  for our coming generations.
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.boxContent}>
          <View style={styles.largebox}>
            <FastImage
              source={Images.ssl}
              style={{width: '20%', height: 50}}
              resizeMode="contain"
            />
            <FastImage
              source={Images.flag}
              style={{width: '50%', height: 75}}
              resizeMode="contain"
            />
            <FastImage
              source={Images.secure}
              style={{width: '20%', height: 50}}
              resizeMode="contain"
            />
          </View>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <Text style={styles.invitationLink}>ABOUT US:</Text>
            <Text
              ellipsizeMode="tail"
              style={{maxWidth: 900, paddingTop: 10, textAlign: 'center'}}>
              We are on a quest to redefine travel. Come! And experience travel
              like none. Insta Tourism offers a 360-degree travel solution.
              Insta Tourism is a long-serving entity in international travel. We
              understand and are all ears to the travellers approaching us for
              their queries and travel-related Q & A.
            </Text>
          </View>
          <View style={{paddingTop: 23}}>
            <Text style={styles.smallHeader}>PAYMENT METHOD:</Text>
            <FastImage
              source={Images.card}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.boxContent}>
          <Text style={styles.invitationLink}>WAYS TO CONNECT WITH US:</Text>
          {renderItem()}
        </View>
      </View>
    </ScrollView>
  );
}
export default React.memo(Team);
