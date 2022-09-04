const find = require('./find');
const data = require('../../data/users');

test('Find a user with a given state by a function', () => {
    expect(
        find(data.users, user => user.state === 'CA')
    ).toEqual(
        expect.objectContaining({ "state": "CA" })
    );
})