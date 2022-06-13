const Manager = require('../lib/manager');

describe("Manager", () => {
  it(`Return the name of the manager's name, id, email, and office number`, () => {
    const manager = new Manager("Clayton", 13, "clayton@gmail.com", 13);

    expect(manager.name).toEqual('Clayton');
    expect(manager.id).toEqual(13);
    expect(manager.email).toEqual('clayton@gmail.com');
    expect(manager.officeNumber).toEqual(13);
  });
})