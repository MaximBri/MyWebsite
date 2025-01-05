interface routesInterface {
  name: string
  path: string
}

export const routes: routesInterface[] = [
  { name: 'Главная', path: '/' },
  { name: 'Работы', path: '/Portfolio' },
  { name: 'Отзывы', path: '/Reviews' },
  // { name: 'О мне', path: '/About' },
]
