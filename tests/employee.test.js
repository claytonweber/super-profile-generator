const Employee = require('../lib/employee');

describe("Employee", () => {
  it(`Return the name of the employee's name, id, and email`, () => {
    const employee = new Employee("Clayton, 13, clayton@gmail.com")

    expect(employee.name).toEqual('Clayton');
    expect(employee.id).toEqual(13);
    expect(employee.email).toEqual('clayton@gmail.com');
  });
})