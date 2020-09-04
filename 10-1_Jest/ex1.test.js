function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

describe('test if the function sums values', () => {
  it('sums the two values', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});

describe('test if throws an Error', () => {
  it('throws an exception', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('throws an Error', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});
