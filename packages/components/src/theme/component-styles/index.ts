import badge from './badge';
import breadcrumb from './breadcrumb';
import button from './button';
import card from './card';
import typography from './typography';
import list from './list';
import boxHeaderParty from './box-header-footer';
import datepicker from './datepicker';
/**
 * Custom theme props based on custom component variants.
 */
const componentStyles = {
  ...badge,
  ...breadcrumb,
  ...button,
  card,
  ...typography,
  ...list,
  ...boxHeaderParty,
  ...datepicker,
};

export default componentStyles;
