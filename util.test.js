import { max } from "./util";

describe('hello', () => {
  it('should give max ', () => {

    expect(max([1, 2, 3, 4])).toBe(4)

  })

  it('should give max with fun ', () => {
    expect(max([1, 2, 3, -4], Math.abs)).toBe(-4)
  })
})
