import {useTranslation} from 'react-i18next';

function useTranslations() {
  const {t: translate, ready} = useTranslation();
  return {
    ready,
    translate,
  };
}
export default useTranslations;
