import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {Images} from '../../../config/images';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // You can choose a different icon library if you prefer

function Team() {
  return (
    <ScrollView>
      <View style={styles.content}>
        <View style={styles.boxContent}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={styles.boxIcon}>
              <Image
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
              <Image
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
              <Image
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
              <Image
                source={Images.review}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.textIcon}>Top Reviews</Text>
            </View>
          </View>
        </View>

        <View style={styles.boxContent}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View>
              <Image
                source={Images.qf}
                style={styles.iconqf}
                resizeMode="contain"
              />
              <View
                style={{
                  paddingTop: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}>
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View>
              <Text style={styles.invitationLink}>
                THINGS TO BE DONE ONCE YOU REACH
              </Text>
              <Image
                source={Images.banner}
                resizeMode="contain"
                style={{width: '100%', height: 260}}
              />
              <View
                style={{
                  paddingTop: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}>
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View>
              <Text style={styles.invitationLink}>
                What you can do while you plan and travel:
              </Text>
              <View
                style={{
                  paddingTop: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}>
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 3,
              marginBottom: 10,
            }}>
            <Image
              source={Images.ssl}
              style={{width: 70}}
              resizeMode="contain"
            />
            <View>
              <Image source={Images.flag} resizeMode="contain" />
            </View>
            <Image
              source={Images.secure}
              style={{width: 70}}
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
            <Image
              source={Images.card}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.boxContent}>
          <Text style={styles.invitationLink}>WAYS TO CONNECT WITH US:</Text>
          <View style={styles.sharelinks}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
              }}>
              <FastImage
                source={Images.whatsapp}
                resizeMode={FastImage.resizeMode.contain}
                style={{width: 50, height: 50}}
              />
              <Text style={styles.textwhite}>WhatsApp</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
              }}>
              <FastImage
                source={Images.telegram}
                resizeMode={FastImage.resizeMode.contain}
                style={{width: 50, height: 50}}
              />
              <Text style={styles.textwhite}>Telegram</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
              }}>
              <FastImage
                source={Images.email}
                resizeMode={FastImage.resizeMode.contain}
                style={{width: 50, height: 50}}
              />
              <Text style={styles.textwhite}>Email</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
              }}>
              <FastImage
                source={Images.sms}
                resizeMode={FastImage.resizeMode.contain}
                style={{width: 50, height: 50}}
              />
              <Text style={styles.textwhite}>SMS</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Team;
