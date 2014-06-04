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
  '101'  : { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },
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

OpenSpending.Descriptions = {
  '総務費': '総務管理費、徴税費、戸籍住民基本台帳費、選挙費、統計調査費、監査委員費、地籍調査費を含む',
  '民生費': '社会福祉費、児童福祉費、生活保護費、災害救助費を含む',
  '衛生費': '保健衛生費、清掃費、上水道費、簡易水道費を含む',
  '土木費': '土木管理費、道路橋りょう費、河川費、港湾費、都市計画費、住宅費、地すべり対策費を含む',
  '教育費': '教育総務費、小学校費、中学校費、幼稚園費、社会教育費、保健体育費を含む',
  '災害復旧費': '農林水産業施設災害復旧費、公共土木施設災害復旧費、文教施設災害復旧費、その他公共施設、公用施設災害復旧費を含む'
};
