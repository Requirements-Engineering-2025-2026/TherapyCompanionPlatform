import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import { styles } from './styles';
import Button from '../Button';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* HEADER */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Therapy Companion</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Panic</Text>
          </TouchableOpacity>
        </View>
     

      {/* PANIC MODAL */}
    
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>You are not alone ❤️</Text>

            <Text style={styles.sectionTitle}>3 Exercises to Calm Down</Text>
            <Text style={styles.text}>1. Breathe in for 4 seconds, hold 4, exhale 6.</Text>
            <Text style={styles.text}>2. Name 5 things you see, 4 you feel, 3 you hear.</Text>
            <Text style={styles.text}>3. Place your hand on your chest and breathe slowly.</Text>

            <Text style={styles.sectionTitle}>Psychologists Near You</Text>
            <Text style={styles.text}>
              • Dr. Liviu Popa{"\n"}23 Venus Street, Cluj Napoca
            </Text>
            <Text style={styles.text}>
              • Dr. Mihaela Suciu{"\n"}45 Bistritei, Cluj Napoca
            </Text>
            <Text style={styles.text}>
              • Dr. Emilian Pop{"\n"}88 Lunga Street, Baia Mare
            </Text>

            <Button
              style={styles.modalButton}
              textStyle={styles.closeText}
              title="Close"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default Header;
