import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './styles';
const BottomNavigator: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string): boolean =>
    location.pathname === path;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigate('/home')}
      >
        <Text style={[styles.icon, isActive('/home') && styles.active]}>
          🏠
        </Text>
        <Text style={[styles.label, isActive('/home') && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigate('/journal')}
      >
        <Text style={[styles.icon, isActive('/journal') && styles.active]}>
          😊
        </Text>
        <Text style={[styles.label, isActive('/journal') && styles.active]}>
          Journal
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigator;
