import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { Provider as PaperProvider } from 'react-native-paper';
import { view } from '@risingstack/react-easy-state';
import { RootStackScreen } from './navigation';

export default view(() => {
  return (
    <NavigationContainer>
      <ActionSheetProvider>
        <PaperProvider>
          <RootStackScreen />
        </PaperProvider>
      </ActionSheetProvider>
    </NavigationContainer>
  );
});
