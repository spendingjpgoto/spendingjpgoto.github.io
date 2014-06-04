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
  '101': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },
  '10100': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },

  // 総務費
  '102': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#0AB971' },
  '10200': { icon: 'icons/government.svg', color: '#C75746', bcolor: '#0AB971' },
  '0201': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#0AB971' },
  '0202': { icon: 'icons/dollar.svg', color: '#C75746', bcolor: '#0AB971' },
  '0203': { icon: 'icons/books.svg', color: '#C75746', bcolor: '#0AB971' },
  '0204': { icon: 'icons/civilian-action.svg', color: '#C75746', bcolor: '#0AB971' },
  '0205': { icon: 'icons/research.svg', color: '#C75746', bcolor: '#0AB971' },
  '0206': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#0AB971' },

  // 民生費
  '103': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#4E6D00' },
  '10300': { icon: 'icons/family2.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0301': { icon: 'icons/helping-others.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0302': { icon: 'icons/old-age.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0303': { icon: 'icons/family.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0304': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#4E6D00' },
  '0305': { icon: 'icons/ambulance.svg', color: '#C75746', bcolor: '#4E6D00' },

  // 衛生費
  '104': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '10400': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '0401': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '0402': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '0403': { icon: 'icons/health.svg', color: '#C75746', bcolor: '#D33673' },
  '0404': { icon: 'icons/garbage.svg', color: '#C75746', bcolor: '#D33673' },

  // 労働費
  '105': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#2A3A03' },
  '10500': { icon: 'icons/labour.svg', color: '#C75746', bcolor: '#2A3A03' },
  '0501': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#2A3A03'  },
  '0502': { icon: 'icons/unemployment.svg', color: '#C75746', bcolor: '#2A3A03'  },

  // 農林水産業費
  '106': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '10600': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '0601': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '0602': { icon: 'icons/pig.svg', color: '#C75746', bcolor: '#EC2406' },
  '0603': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#EC2406' },
  '0604': { icon: 'icons/forest.svg', color: '#C75746', bcolor: '#EC2406' },
  '0605': { icon: 'icons/fishing.svg', color: '#C75746', bcolor: '#EC2406' },

  // 商工費
  '107': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },
  '10700': { icon: 'icons/economy-tourism.svg', color: '#C75746', bcolor: '#938626' },

  // 土木費
  '108': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#C75746' },
  '10800': { icon: 'icons/coal.svg', color: '#C75746', bcolor: '#C75746' },
  '0801': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#C75746' },
  '0802': { icon: 'icons/manufactoring-construction.svg', color: '#C75746', bcolor: '#C75746' },
  '0803': { icon: 'icons/unknown.svg', color: '#C75746', bcolor: '#C75746' },
  '0804': { icon: 'icons/harbor.svg', color: '#C75746', bcolor: '#C75746' },
  '0805': { icon: 'icons/our-streets.svg', color: '#C75746', bcolor: '#C75746' },
  '0806': { icon: 'icons/housing.svg', color: '#C75746', bcolor: '#C75746' },
  '0807': { icon: 'icons/airplane.svg', color: '#C75746', bcolor: '#C75746' },

  // 消防費
  '109': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#D33673' },
  '10900': { icon: 'icons/fire-brigade.svg', color: '#C75746', bcolor: '#D33673' },

  // 教育費
  '110': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '11000': { icon: 'icons/education.svg', color: '#C75746', bcolor: '#790586' },
  '1001': { icon: 'icons/admin.svg', color: '#C75746', bcolor: '#790586' },
  '1002': { icon: 'icons/primary.svg', color: '#C75746', bcolor: '#790586' },
  '1003': { icon: 'icons/secondary-lower.svg', color: '#C75746', bcolor: '#790586' },
  '1004': { icon: 'icons/secondary-upper.svg', color: '#C75746', bcolor: '#790586' },
  '1005': { icon: 'icons/schools.svg', color: '#C75746', bcolor: '#790586' },
  '1006': { icon: 'icons/pre-school.svg', color: '#C75746', bcolor: '#790586' },
  '1007': { icon: 'icons/planning.svg', color: '#C75746', bcolor: '#790586' },
  '1008': { icon: 'icons/sports.svg', color: '#C75746', bcolor: '#790586' },
  '1009': { icon: 'icons/post-secondary.svg', color: '#C75746', bcolor: '#790586' },

  // 災害復旧費
  '111': { icon: 'icons/aid-developing-countries.svg', color: '#C75746', bcolor: '#935B3B' },
  '11100': { icon: 'icons/aid-developing-countries.svg', color: '#C75746', bcolor: '#935B3B' },
  '1101': { icon: 'icons/farms.svg', color: '#C75746', bcolor: '#935B3B' },
  '1102': { icon: 'icons/construction.svg', color: '#C75746', bcolor: '#935B3B' },
  '1103': { icon: 'icons/legislative.svg', color: '#C75746', bcolor: '#935B3B' },

  // 公債費
  '112': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#0AB971' },
  '11200': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#0AB971' },

  // 諸支出費
  '113': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' },
  '11300': { icon: 'icons/publicaffairs.svg', color: '#C75746', bcolor: '#4E6D00' },
  '1301': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#4E6D00' },
  '1302': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#4E6D00' },
  '1303': { icon: 'icons/public-debt.svg', color: '#C75746', bcolor: '#4E6D00' },

  // 前年度繰上充用金
  '114': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' },
  '11400': { icon: 'icons/money.svg', color: '#C75746', bcolor: '#D33673' }
};


