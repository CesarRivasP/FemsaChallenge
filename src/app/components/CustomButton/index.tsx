import React, {memo} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  ButtonProps,
} from 'react-native';
import styles from '@components/CustomButton/styles';
import useTranslations from '@hooks/useTranslations';

interface CustomButtonProps extends ButtonProps {
  title: string;
  onPress: TouchableOpacityProps['onPress'];
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

function CustomButton(props: CustomButtonProps) {
  const {title, onPress, containerStyle, textStyle} = props;
  const {translate} = useTranslations();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}
      {...(props as TouchableOpacityProps)}>
      <Text style={[styles.text, textStyle]}>{translate(title)}</Text>
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  activeOpacity: 0.8,
  onPress: () => {},
};

export default memo(CustomButton);
