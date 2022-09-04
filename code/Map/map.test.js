const map = require('./map');
const data = require('../../data/users');

test('Filter an array with given state as function', () => {
    expect(
        map(data.users,
            user => {
                user.age = 40
                return user
            })
    ).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ "age": 40 })
        ])
    );
})