interface routesInterface {
  name: string
  path: string
}

export const navRoutes: routesInterface[] = [
  { name: 'Главная', path: '/' },
  { name: 'Работы', path: '/Portfolio/' },
  { name: 'Мой путь', path: '/MyPath/' },
]
