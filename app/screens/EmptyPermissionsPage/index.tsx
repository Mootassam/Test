import React from 'react';
import {View, Text, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import authActions from '../../modules/auth/authActions';
import authSelectors from '../../modules/auth/authSelectors';

function EmptyPermissionsPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  const activationLink = '[Activation Link]'; // Replace with your actual activation link

  const handleWhatsApp = () => {
    const message = 'Account activation screenshot';
    const whatsappLink = `whatsapp://send?text=${encodeURIComponent(
      message,
    )}&phone=[Your WhatsApp Number]`; // Replace with your actual WhatsApp number
    Linking.openURL(whatsappLink);
  };

  const logout = () => {
    dispatch(authActions.doSignout());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Greetings, {currentUser.email}!</Text>
      <Text style={styles.message}>
        Thank you for selecting us to create your account. We deeply appreciate
        the trust you've placed in our services. Currently, your account is
        awaiting activation. To finalize this process,{' '}
        <Text style={styles.highlight}>kindly capture a screenshot</Text> and
        send it to us via WhatsApp using the following link:
      </Text>
      <TouchableOpacity onPress={handleWhatsApp} style={styles.activationLink}>
        <Text style={styles.linkText}>{activationLink}</Text>
      </TouchableOpacity>
      <Text style={styles.message}>
        Upon receiving your message, our{' '}
        <Text style={styles.highlight}>dedicated team</Text> will promptly
        review and activate your account. If you have any questions or need
        further assistance, please don't hesitate to reach out to our{' '}
        <Text style={styles.supportTeam} onPress={handleWhatsApp}>support team</Text>
      </Text>
      <Text style={styles.thankYou}>
        We truly appreciate your understanding and cooperation.
      </Text>
      <Text style={styles.regards}>Best regards,{'\n'}[Your Company Name]</Text>

      <Button text="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  message: {
    fontSize: 15,
    marginBottom: 15,
    color: '#555',
    lineHeight: 20,
  },
  activationLink: {
    backgroundColor: '#3498db',
    padding: 13,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },

  thankYou: {
    fontSize: 18,
    marginBottom: 20,
    fontStyle: 'italic',
    color: '#666',
  },
  regards: {
    fontSize: 18,
    marginTop: 20,
    color: '#333',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#3498db', // Adjust the color as needed
  },
  supportTeam: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#27ae60', // Adjust the color as needed
  },
});

export default EmptyPermissionsPage;
