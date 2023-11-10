import {double, concat } from '../src/index'

describe('testing index file', () => {
  test('concat function', () => {
    expect(double(5)).toBe(10);
  })

test('concat function', () => {
  expect(concat('John', ' ', 'Wick')).toBe('John Wick')
})

})