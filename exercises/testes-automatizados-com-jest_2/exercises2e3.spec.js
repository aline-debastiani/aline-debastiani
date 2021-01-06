const { findUserById, getUserName } = require('./exercises2e3');

describe('getUserName - promise', () => {
  describe('when the user id exists', () => {
    it('returns the user name', () => {
      expect.assertions(1);
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });
    });
  describe('when the user does not exists', () => {
      it('returns an error', () => {
        expect.assertions(1);
        return getUserName(2).catch(error =>
          expect(error).toEqual({ error: 'User with 2 not found.'})
        );
      });
  });
  });

  describe('get user name - async/awayt', () => {
      describe('when the user id exists', () => {
        it('returns the user name', async () => {
            expect.assertions(1);
            const data = await getUserName(4);
            expect(data).toEqual('Mark');
        });
      });
      describe('when the user id does not exists', () => {
        it('returns an error', async () => {
          expect.assertions(1);
          try {
          await getUserName(1);
        } catch (error) {
          expect(error).toEqual({ error: 'User with 1 not found.' });
        }
    });
  });
});
