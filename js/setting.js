/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'goto_2012_nca_pp_exp';
OpenSpending.year = '2012';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* goto cofog */
  // 議会費
  '101'  : { icon: 'icons/legislative.svg', color: '#00B034', bcolor: '#935B3B' },
  '10100': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },

  // 総務費
  '102'  : { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '10200': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },

  // 民生費
  '103'  : { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' },
  '10300': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' },

  // 衛生費
  '104'  : { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '10400': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },

  // 労働費
  '105'  : { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#2A3A03' },
  '10500': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#2A3A03' },

  // 農林水産業費
  '106'  : { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '10600': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },

  // 商工費
  '107'  : { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },
  '10700': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },

  // 土木費
  '108'  : { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#C75746' },
  '10800': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#C75746' },

  // 消防費
  '109'  : { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#D33673' },
  '10900': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#D33673' },

  // 教育費
  '110'  : { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '11000': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },

  // 災害復旧費
  '111'  : { icon: 'icons/aid-developing-countries.svg', color: '#C75746', bcolor: '#935B3B' },
  '11100': { icon: 'icons/aid-developing-countries.svg', color: '#C75746', bcolor: '#935B3B' },

  // 公債費
  '112'  : { icon: 'icons/money.svg', color: '#C75746', bcolor: '#0AB971' },
  '11200': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#0AB971' },

  // 諸支出費
  '113'  : { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#4E6D00' },
  '11300': { icon: 'icons/financial-admin.svg', color: '#C75746', bcolor: '#4E6D00' },

  // 前年度繰上充用金
  '114'  : { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' },
  '11400': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' }
  
};
