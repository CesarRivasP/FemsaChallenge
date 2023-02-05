import Routes from '@constants/routes';

export type AppStackParamList = {
  [Routes.Home]: undefined;
  [Routes.ProductDetail]: {
    createdAt: string;
    image: string | undefined;
    points: number;
    product: string;
  };
};
