import commentsCounter from '../commentsCounter.js';

describe('returns the length of comments', () => {
  it('returns length of initial comments', () => {
    const comments = [];
    expect(commentsCounter(comments)).toBe(0);
  });

  it('returns length on addition of new comments', () => {
    const newComments = [
      {
        comment: 'This is nice!',
        creation_date: '2021-01-10',
        username: 'John',
      },
      {
        comment: 'Great content!',
        creation_date: '2021-02-10',
        username: 'Jane',
      },
    ];
    expect(commentsCounter(newComments)).toBe(2);
  });
});
