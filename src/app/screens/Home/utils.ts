import {format} from 'date-fns';
import {es} from 'date-fns/locale';

export const getDateFormatted = (date: string) => {
  if (!date) {
    return 'Invalid date';
  }
  const formatDate = new Date(date);
  const formattedDate = format(formatDate, "dd 'de' MMMM, yyyy", {
    locale: es,
  });
  return formattedDate;
};
