const Intern = require('../lib/intern');

describe("Intern", () => {
  it(`Return the name of the interns's name, id, email, and school`, () => {
    const intern = new Intern("Mini-Clayton", 13, "miniclayton@gmail.com", "du");

    expect(intern.name).toEqual('Mini-Clayton');
    expect(intern.id).toEqual(13);
    expect(intern.email).toEqual('miniclayton@gmail.com');
    expect(intern.school).toEqual('du');
  });
})