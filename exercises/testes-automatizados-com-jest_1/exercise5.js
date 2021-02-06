const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

test('compara objetos', () => {
    expect(obj1).toEqual(obj3);
    expect(obj1).not.toEqual(obj2);
});
