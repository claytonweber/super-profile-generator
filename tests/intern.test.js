const Intern = require('../lib/intern');

describe("Intern", () => {
  it(`Return the name of the interns's name, id, email, and school`, () => {
    const intern = new Intern("Mini-Clayton", 13, "clayton@gmail.com", "du");

    expect(intern.name).toEqual('Mini-clayton');
    expect(intern.id).toEqual(3);
    expect(intern.email).toEqual('miniclayton@gmail.com');
    expect(intern.school).toEqual('du');
  });
})