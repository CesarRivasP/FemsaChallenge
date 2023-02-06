export interface ListData {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
  from_account_id?: number;
  to_account_id: number;
  amount?: number;
  verification_code?: string;
  reason?: string;
}

export interface ListProps {
  item: ListData;
  index: number;
}

export enum ListFilters {
  ALL = 'ALL',
  WINNING = 'WINNING',
  REDEEMED = 'REDEEMED',
}

export const MONTH_DUMMY = 'Diciembre';
export const NAME_DUMMY = 'Ruben Rodriguez';
