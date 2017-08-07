
var ntw = require('./number_to_words')
var should = require('chai').should()

describe('Test number to word function', function () {
  it(`should return 'satu'`, function () {
    ntw(1).should.equal('satu');
  })
  it(`should return 'dua'`, function () {
    ntw(2).should.equal('dua');
  })
  it(`should return 'sebelas'`, function () {
    ntw(11).should.equal('sebelas')
  })
  it(`should return 'dua puluh'`, function () {
    ntw(20).should.equal('dua puluh')
  })
  it(`should return 'dua puluh dua'`, function () {
    ntw(22).should.equal('dua puluh dua')
  })
  it(`should return 'seratus dua puluh dua'`, function () {
    ntw(122).should.equal('seratus dua puluh dua')
  })
  it(`should return 'lima ratus dua puluh'`, function () {
    ntw(520).should.equal('lima ratus dua puluh')
  })
})
