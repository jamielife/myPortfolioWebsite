import { Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

/* 
Usage: <FadeInView><Home /></FadeInView>

// can't remember if this was necessary, but doubtful
const customDrawOptions = {
    headerStyleInterpolator: forFade
  }  
*/

const FadeInView = (props, { navigation }) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
    useFocusEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start();
      return () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }).start();
      };
    });
  
    return (
      <Animated.View // Special animatable View
        style={{
          flex: 1,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };
  
  const forFade = ({ current, next }) => {
    const opacity = Animated.add(
      current.progress,
      next ? next.progress : 0
    ).interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 1, 0],
    });
  };