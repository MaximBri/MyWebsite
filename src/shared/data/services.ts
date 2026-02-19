export interface Service {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'figma.svg',
    title: 'Вёрстка интерфейсов',
    description:
      'Pixel-perfect по макетам Figma. HTML, CSS/SCSS, Tailwind — полная адаптивность под любые устройства.',
  },
  {
    icon: 'react.svg',
    title: 'React / Next.js',
    description:
      'SPA и SSR/SSG приложения. Компонентная архитектура, RTK, React Query, Zustand.',
  },
  {
    icon: 'typescript.svg',
    title: 'TypeScript',
    description:
      'Типизированный фронтенд: Zod-валидация, React Hook Form, строгие интерфейсы и типы.',
  },
  {
    icon: 'nest.svg',
    title: 'Backend на NestJS',
    description: 'REST API на Node.js / NestJS. Работа с PostgreSQL через Prisma ORM.',
  },
  {
    icon: 'webpack.svg',
    title: 'Оптимизация',
    description:
      'Аудит производительности: минимизация бандлов, ленивая загрузка, кэширование запросов.',
  },
  {
    icon: 'docker.svg',
    title: 'DevOps и деплой',
    description: 'Docker-контейнеры, GitHub Actions CI/CD, настройка Nginx на VPS.',
  },
]
