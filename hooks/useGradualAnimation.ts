import { useSharedValue } from 'react-native-reanimated';
import { useKeyboardHandler } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useGradualAnimation = () => {
  const { bottom } = useSafeAreaInsets();
  const height = useSharedValue(0);

  useKeyboardHandler(
    {
      onMove: (event) => {
        'worklet';
        height.value = Math.max(event.height - bottom, 0);
      },
    },
    [],
  );
  return { height };
};

export default useGradualAnimation;
