import { StyleSheet } from 'react-native';

import { COLORS } from '@/constants/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    paddingLeft: 16,
    margin: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: COLORS.LINE,
    borderRadius: 100,
    overflow: 'hidden',
  },
  input: {
    marginRight: 10,
  },
});
