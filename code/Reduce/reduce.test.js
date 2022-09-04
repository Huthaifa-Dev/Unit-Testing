const reduce = require('./reduce');
const data = require('../../data/users');

test('Find a user with a given state by a function', () => {
    expect(
        reduce(data.users, (result, user) => {
            result += user.age
            return result
        })
    ).toEqual(475);
})