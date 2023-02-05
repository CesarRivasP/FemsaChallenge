import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Routes from '@constants/routes';
import {StatusBar} from 'expo-status-bar';
import {LayoutType} from '@components/SafeAreaWrapper/constants';
import {isCustomHeader} from '@components/SafeAreaWrapper/utils';
import generateStyles, {
  generateBackgroundColor,
} from '@components/SafeAreaWrapper/styles';

function SafeAreaWrapper<P extends object>(
  key: Routes,
  WrappedComponent: React.ComponentType<P>,
) {
  function NewComponent(props: any) {
    const {top, bottom} = useSafeAreaInsets();
    const isCustomHead = isCustomHeader(key);

    const styles = useMemo(
      () =>
        generateStyles({
          top,
          bottom,
        }),
      [top, bottom],
    );

    const backgrounds = useMemo(() => {
      return {
        headBackground: isCustomHead
          ? generateBackgroundColor(key, LayoutType.HEAD)
          : generateBackgroundColor(key, LayoutType.BODY),
        bodyBackground: generateBackgroundColor(key, LayoutType.BODY),
      };
    }, [isCustomHead]);

    if (isCustomHead) {
      return (
        <React.Fragment key={`SafeArea-${key}`}>
          <StatusBar
            animated
            style="light"
            backgroundColor={backgrounds.headBackground}
          />
          <SafeAreaView
            style={[
              styles.customHeadContainer,
              {
                backgroundColor: backgrounds.headBackground,
              },
            ]}
          />
          <SafeAreaView
            style={[
              styles.container,
              {
                backgroundColor: backgrounds.bodyBackground,
              },
            ]}>
            <WrappedComponent {...props} />
          </SafeAreaView>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={`SafeArea-${key}`}>
        <StatusBar
          animated
          style="light"
          backgroundColor={backgrounds.bodyBackground}
        />
        <SafeAreaView
          style={[
            styles.container,
            {
              paddingTop: top,
              paddingBottom: bottom,
              backgroundColor: backgrounds.bodyBackground,
            },
          ]}>
          <WrappedComponent {...props} />
        </SafeAreaView>
      </React.Fragment>
    );
  }
  return NewComponent;
}
export default SafeAreaWrapper;
