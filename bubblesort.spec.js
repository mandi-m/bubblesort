

describe('Bubble Sort Function', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('It handles various arrays:', function(){
  it('handles an array with only one element', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  });
  it('handles an array with four elements', function(){
    expect( bubbleSort([4,3,2,1]) ).toEqual( [1,2,3,4] );
  });
});




before(function () {
  spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['eat']` method
  const tootsiepop = {};
tootsiepop.lick = function () {
  return 'licked';
};
tootsiepop.getToCenter = function () {
  this.lick();
  this.lick();
  this.lick();
  return 'got to center';
};

it('getting to the center of tootsiepop involves exactly three licks', function () {
  tootsiepop.getToCenter();
  expect(tootsiepop.lick.calls.count()).toEqual(3);
});
});

  // it('handles an array with only one element', function(){
  //   expect( bubbleSort([2]) ).toEqual( [2] );
  // });

