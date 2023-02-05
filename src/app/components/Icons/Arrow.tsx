import React, {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {iconBlack} from '@constants/colors';

const ArrowSvgComponent = (props: SvgProps) => (
  <Svg width={props.width} height={props.height} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.474V10l10-5L0 0v2.526L4.947 5 0 7.474Z"
      fill={props.fill}
    />
  </Svg>
);

ArrowSvgComponent.defaultProps = {
  width: 24,
  height: 24,
  fill: iconBlack,
};

export default memo(ArrowSvgComponent);
