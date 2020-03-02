// [range, version, loose]
// Version should NOT be greater than range
module.exports = [
  ['~0.6.1-1', '0.6.1-1'],
  ['1.0.0 - 2.0.0', '1.2.3'],
  ['1.0.0 - 2.0.0', '0.9.9'],
  ['1.0.0', '1.0.0'],
  ['>=*', '0.2.4'],
  ['', '1.0.0', true],
  ['*', '1.2.3'],
  ['*', 'v1.2.3-foo'],
  ['>=1.0.0', '1.0.0'],
  ['>=1.0.0', '1.0.1'],
  ['>=1.0.0', '1.1.0'],
  ['>1.0.0', '1.0.1'],
  ['>1.0.0', '1.1.0'],
  ['<=2.0.0', '2.0.0'],
  ['<=2.0.0', '1.9999.9999'],
  ['<=2.0.0', '0.2.9'],
  ['<2.0.0', '1.9999.9999'],
  ['<2.0.0', '0.2.9'],
  ['>= 1.0.0', '1.0.0'],
  ['>=  1.0.0', '1.0.1'],
  ['>=   1.0.0', '1.1.0'],
  ['> 1.0.0', '1.0.1'],
  ['>  1.0.0', '1.1.0'],
  ['<=   2.0.0', '2.0.0'],
  ['<= 2.0.0', '1.9999.9999'],
  ['<=  2.0.0', '0.2.9'],
  ['<    2.0.0', '1.9999.9999'],
  ['<\t2.0.0', '0.2.9'],
  ['>=0.1.97', 'v0.1.97'],
  ['>=0.1.97', '0.1.97'],
  ['0.1.20 || 1.2.4', '1.2.4'],
  ['0.1.20 || >1.2.4', '1.2.4'],
  ['0.1.20 || 1.2.4', '1.2.3'],
  ['0.1.20 || 1.2.4', '0.1.20'],
  ['>=0.2.3 || <0.0.1', '0.0.0'],
  ['>=0.2.3 || <0.0.1', '0.2.3'],
  ['>=0.2.3 || <0.0.1', '0.2.4'],
  ['||', '1.3.4'],
  ['2.x.x', '2.1.3'],
  ['1.2.x', '1.2.3'],
  ['1.2.x || 2.x', '2.1.3'],
  ['1.2.x || 2.x', '1.2.3'],
  ['x', '1.2.3'],
  ['2.*.*', '2.1.3'],
  ['1.2.*', '1.2.3'],
  ['1.2.* || 2.*', '2.1.3'],
  ['1.2.* || 2.*', '1.2.3'],
  ['1.2.* || 2.*', '1.2.3'],
  ['*', '1.2.3'],
  ['2', '2.1.2'],
  ['2.3', '2.3.1'],
  ['~2.4', '2.4.0'], // >=2.4.0 <2.5.0
  ['~2.4', '2.4.5'],
  ['~>3.2.1', '3.2.2'], // >=3.2.1 <3.3.0
  ['~1', '1.2.3'], // >=1.0.0 <2.0.0
  ['~>1', '1.2.3'],
  ['~> 1', '1.2.3'],
  ['~1.0', '1.0.2'], // >=1.0.0 <1.1.0
  ['~ 1.0', '1.0.2'],
  ['>=1', '1.0.0'],
  ['>= 1', '1.0.0'],
  ['<1.2', '1.1.1'],
  ['< 1.2', '1.1.1'],
  ['1', '1.0.0beta', true],
  ['~v0.5.4-pre', '0.5.5'],
  ['~v0.5.4-pre', '0.5.4'],
  ['=0.7.x', '0.7.2'],
  ['>=0.7.x', '0.7.2'],
  ['=0.7.x', '0.7.0-asdf'],
  ['>=0.7.x', '0.7.0-asdf'],
  ['<=0.7.x', '0.6.2'],
  ['>0.2.3 >0.2.4 <=0.2.5', '0.2.5'],
  ['>=0.2.3 <=0.2.4', '0.2.4'],
  ['1.0.0 - 2.0.0', '2.0.0'],
  ['^1', '0.0.0-0'],
  ['^3.0.0', '2.0.0'],
  ['^1.0.0 || ~2.0.1', '2.0.0'],
  ['^0.1.0 || ~3.0.1 || 5.0.0', '3.2.0'],
  ['^0.1.0 || ~3.0.1 || 5.0.0', '1.0.0beta', true],
  ['^0.1.0 || ~3.0.1 || 5.0.0', '5.0.0-0', true],
  ['^0.1.0 || ~3.0.1 || >4 <=5.0.0', '3.5.0'],
  ['0.7.x', '0.7.2-beta', { includePrerelease: true }]
]
