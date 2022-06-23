import avatar from './avatar';
import actionList from './action-list';
import badge from './badge';
import breadcrumb from './breadcrumb';
import button from './button';
import card from './card';
import typography from './typography';
import list from './list';
import boxHeaderParty from './box-header-footer';
import datepicker from './datepicker';
import checkbox from './form/checkbox';
import optionItem from './optionItem';
import inputRadio from './form/input-radio';
import form from './form/form';
import tag from './tag';
import tabs from './tabs';
/**
 * Custom theme props based on custom component variants.
 */
const componentStyles = {
  ...avatar,
  ...actionList,
  ...badge,
  ...breadcrumb,
  ...button,
  card,
  ...typography,
  ...list,
  ...boxHeaderParty,
  ...datepicker,
  ...checkbox,
  ...inputRadio,
  ...form,
  ...tag,
  ...optionItem,
  ...tabs
};

export default componentStyles;
