/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test('testar idade maior', function () {
    var final = validarIdade(18);
    expect(final).toBe(true);
})


