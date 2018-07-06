const expect = require('chai').expect;
const mergeSort = require('../mergeSort');
//DONE!!!!
//actually lets push it to github!!

describe('mergeSort', ()=> {
  it('exists', ()=> {
    expect(mergeSort).to.be.ok;
  });

  it('sorts a one element array', ()=> {
    expect(mergeSort([1])).to.eql([1]);
  });
  it('sorts a zero element array', ()=> {
    expect(mergeSort([])).to.eql([]);
  });
  it('sorts a two element array', ()=> {
    expect(mergeSort([2, 1])).to.eql([1, 2]);
  });
  it('sorts a three element array', ()=> {
    expect(mergeSort([3, 2, 1])).to.eql([1, 2, 3]);
  });
});
