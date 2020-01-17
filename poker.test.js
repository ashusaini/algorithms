import { poker, cardRanks, flush, straight } from "./poker";

describe('hello', () => {
  it('Test Case For the Functions in poker program ', () => {

    const sf = "6C 7C 8C 9C TC".split(" ")
    const fk = "9D 9H 9S 9C 7D".split(" ")
    const fh = "TD TC TH 7C 7D".split(" ")

    expect(cardRanks(sf)).toStrictEqual([10, 9, 8, 7, 6])
    expect(flush(sf)).toBe(true)
    expect(flush(fk)).toBe(false)
    expect(straight([10, 9, 8, 7, 6])).toBe(true)
    expect(straight([10, 9, 7, 7, 6])).toBe(false)
    // expect(poker([sf, fk, fh])).toBe(sf)
    // expect(poker([fk, fh])).toBe(fk)
    // expect(poker([fh, fh])).toBe(fh)

  })

})
