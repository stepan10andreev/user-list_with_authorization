export const getRandomUserPosition = (id: number) => {
  const arrayPositions = [
    'Маркетолог',
    'Менеджер',
    'Инженер',
    'Бухгалтер',
    'Менеджер',
    'Экономист',
    'Аналитик',
    'Менеджер',
    'Разработчик',
    'Дизайнер',
    'Юрист'
  ]
  return arrayPositions[id - 1]
}
