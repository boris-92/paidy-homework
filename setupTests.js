import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('expo-font');
jest.mock('expo-asset');
jest.mock('react-native-keyboard-controller', () => require('react-native-keyboard-controller/jest'));
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
