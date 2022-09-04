const filter = require('./filter');
const data = require('../../data/users');

test('Filter an array with given state as function', () => {
    expect(
        filter(data.users, user => user.age <= 40)
    ).toEqual(
        expect.arrayContaining([
            expect.objectContaining({ "age": 25 }),
            expect.objectContaining({ "age": 30 }),
            expect.objectContaining({ "age": 35 }),
            expect.objectContaining({ "age": 40 })
        ])
    );
})