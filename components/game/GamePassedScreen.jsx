import React from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';

export default function GamePassedScreen({ visible, onNext }) {
  return (
    <View>
      <Modal visible={visible} animationType='slide'>
        <View style={styles.container}>
          <Text>
            Passed!
          </Text>
          {onNext &&
            <Button title='Next' onPress={onNext} />
          }
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});