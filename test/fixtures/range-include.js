// [range, version, options]
// version should be included by range
module.exports = [
  ['1.0.0 - 2.0.0', '1.2.3'],
  ['^1.2.3+build', '1.2.3'],
  ['^1.2.3+build', '1.3.0'],
  ['1.2.3-pre+asdf - 2.4.3-pre+asdf', '1.2.3'],
  ['1.2.3pre+asdf - 2.4.3-pre+asdf', '1.2.3', true],
  ['1.2.3-pre+asdf - 2.4.3pre+asdf', '1.2.3', true],
  ['1.2.3pre+asdf - 2.4.3pre+asdf', '1.2.3', true],
  ['1.2.3-pre+asdf - 2.4.3-pre+asdf', '1.2.3-pre.2'],
  ['1.2.3-pre+asdf - 2.4.3-pre+asdf', '2.4.3-alpha'],
  ['1.2.3+asdf - 2.4.3+asdf', '1.2.3'],
  ['1.0.0', '1.0.0'],
  ['>=*', '0.2.4'],
  ['', '1.0.0'],
  ['*', '1.2.3', {}],
  ['*', 'v1.2.3', { loose: 123 }],
  ['>=1.0.0', '1.0.0', /asdf/],
  ['>=1.0.0', '1.0.1', { loose: null }],
  ['>=1.0.0', '1.1.0', { loose: 0 }],
  ['>1.0.0', '1.0.1', { loose: undefined }],
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
  ['>=0.1.97', 'v0.1.97', true],
  ['>=0.1.97', '0.1.97'],
  ['0.1.20 || 1.2.4', '1.2.4'],
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
  ['*', '1.2.3'],
  ['2', '2.1.2'],
  ['2.3', '2.3.1'],
  ['~0.0.1', '0.0.1'],
  ['~0.0.1', '0.0.2'],
  ['~x', '0.0.9'], // >=2.4.0 <2.5.0
  ['~2', '2.0.9'], // >=2.4.0 <2.5.0
  ['~2.4', '2.4.0'], // >=2.4.0 <2.5.0
  ['~2.4', '2.4.5'],
  ['~>3.2.1', '3.2.2'], // >=3.2.1 <3.3.0,
  ['~1', '1.2.3'], // >=1.0.0 <2.0.0
  ['~>1', '1.2.3'],
  ['~> 1', '1.2.3'],
  ['~1.0', '1.0.2'], // >=1.0.0 <1.1.0,
  ['~ 1.0', '1.0.2'],
  ['~ 1.0.3', '1.0.12'],
  ['~ 1.0.3alpha', '1.0.12', { loose: true }],
  ['>=1', '1.0.0'],
  ['>= 1', '1.0.0'],
  ['<1.2', '1.1.1'],
  ['< 1.2', '1.1.1'],
  ['~v0.5.4-pre', '0.5.5'],
  ['~v0.5.4-pre', '0.5.4'],
  ['=0.7.x', '0.7.2'],
  ['<=0.7.x', '0.7.2'],
  ['>=0.7.x', '0.7.2'],
  ['<=0.7.x', '0.6.2'],
  ['~1.2.1 >=1.2.3', '1.2.3'],
  ['~1.2.1 =1.2.3', '1.2.3'],
  ['~1.2.1 1.2.3', '1.2.3'],
  ['~1.2.1 >=1.2.3 1.2.3', '1.2.3'],
  ['~1.2.1 1.2.3 >=1.2.3', '1.2.3'],
  ['~1.2.1 1.2.3', '1.2.3'],
  ['>=1.2.1 1.2.3', '1.2.3'],
  ['1.2.3 >=1.2.1', '1.2.3'],
  ['>=1.2.3 >=1.2.1', '1.2.3'],
  ['>=1.2.1 >=1.2.3', '1.2.3'],
  ['>=1.2', '1.2.8'],
  ['^1.2.3', '1.8.1'],
  ['^0.1.2', '0.1.2'],
  ['^0.1', '0.1.2'],
  ['^0.0.1', '0.0.1'],
  ['^1.2', '1.4.2'],
  ['^1.2 ^1', '1.4.2'],
  ['^1.2.3-alpha', '1.2.3-pre'],
  ['^1.2.0-alpha', '1.2.0-pre'],
  ['^0.0.1-alpha', '0.0.1-beta'],
  ['^0.0.1-alpha', '0.0.1'],
  ['^0.1.1-alpha', '0.1.1-beta'],
  ['^x', '1.2.3'],
  ['x - 1.0.0', '0.9.7'],
  ['x - 1.x', '0.9.7'],
  ['1.0.0 - x', '1.9.7'],
  ['1.x - x', '1.9.7'],
  ['<=7.x', '7.9.9'],
  ['2.x', '2.0.0-pre.0', { includePrerelease: true }],
  ['2.x', '2.1.0-pre.0', { includePrerelease: true }],
  ['1.1.x', '1.1.0-a', { includePrerelease: true }],
  ['1.1.x', '1.1.1-a', { includePrerelease: true }],
  ['*', '1.0.0-rc1', { includePrerelease: true }],
  ['^1.0.0-0', '1.0.1-rc1', { includePrerelease: true }],
  ['^1.0.0-rc2', '1.0.1-rc1', { includePrerelease: true }],
  ['^1.0.0', '1.0.1-rc1', { includePrerelease: true }],
  ['^1.0.0', '1.1.0-rc1', { includePrerelease: true }],
  ['1 - 2', '2.0.0-pre', { includePrerelease: true }],
  ['1 - 2', '1.0.0-pre', { includePrerelease: true }],
  ['1.0 - 2', '1.0.0-pre', { includePrerelease: true }],

  ['=0.7.x', '0.7.0-asdf', { includePrerelease: true }],
  ['>=0.7.x', '0.7.0-asdf', { includePrerelease: true }],
  ['<=0.7.x', '0.7.0-asdf', { includePrerelease: true }],

  ['>=1.0.0 <=1.1.0', '1.1.0-pre', { includePrerelease: true }],
]
