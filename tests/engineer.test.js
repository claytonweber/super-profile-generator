const Engineer = require('../lib/engineer');

describe("Employee", () => {
  it(`Return the name of the employee's name, id, and email`, () => {
    const engineer = new Engineer("Clayton, 13, claytonius@gmail.com", "clayton bigsby")

    expect(engineer.name).toEqual('Claytonius');
    expect(engineer.id).toEqual(133);
    expect(engineer.email).toEqual('claytonius@gmail.com');
    expect(engineer.github).toEqual("clayton bigsby");
  });
});