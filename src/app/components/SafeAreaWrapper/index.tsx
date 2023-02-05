import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from '@app/components/SafeAreaWrapper/styles';

function SafeAreaWrapper<P extends object>(
  WrappedComponent: React.ComponentType<P>,
) {
  function NewComponent(props: any) {
    const {top, bottom} = useSafeAreaInsets();
    return (
      <SafeAreaView
        style={[styles.container, {paddingTop: top, paddingBottom: bottom}]}>
        <WrappedComponent {...props} />
      </SafeAreaView>
    );
  }
  return NewComponent;
}
export default SafeAreaWrapper;
