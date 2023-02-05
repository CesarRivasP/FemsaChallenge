import {useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParamList} from '@constants/appStackParamsList';

type TypedParams = keyof AppStackParamList;
export type RouteType<T extends TypedParams> = RouteProp<AppStackParamList, T>;

function useRouteWithParams<T extends TypedParams>() {
  return useRoute<RouteType<T>>();
}

export default useRouteWithParams;
