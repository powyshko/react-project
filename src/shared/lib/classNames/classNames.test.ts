import { classNames } from './classNames'

describe('Тестирование classNames', () => {
  test('Работа функции с одним первым параметром', () => {
    expect(classNames('testClass')).toBe('testClass')
  })

  test('Работа функции с дополнительными параметрами в массиве 3 аргумента', () => {
    const expectedString = 'testClass addClass class1'
    expect(classNames('testClass', {}, ['addClass', 'class1'])).toBe(expectedString)
  })

  test('Работа функции со всеми параметрами', () => {
    const expectedString = 'testClass addClass class1 active hovered'
    expect(classNames('testClass', { active: true, hovered: true }, ['addClass', 'class1'])).toBe(expectedString)
  })

  test('Работа функции со всеми параметрами и один из модов равен false', () => {
    const expectedString = 'testClass addClass class1 active'
    expect(classNames('testClass', { active: true, hovered: false }, ['addClass', 'class1'])).toBe(expectedString)
  })
})
