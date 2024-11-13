import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/Colors';

export default StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.LINE,
    borderRadius: 100,
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 4,
  },
  text: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 22,
    fontWeight: '100',
  },
});
