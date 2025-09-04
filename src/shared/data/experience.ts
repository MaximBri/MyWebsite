import { ExperienceItemModel } from '@/features/main/experience/utils/experienceCalculator'

export const experienceList: ExperienceItemModel[] = [
  {
    name: 'Critica Agency',
    description:
      'Рефакторинг крупного фронтенд-кода: исправление багов, оптимизация производительности и улучшение архитектуры компонентов.',
    stack: ['React', 'Next.js', 'TypeScript', 'React-query', 'Zustand', 'Css'],
    period: {
      start: '27.08.2025',
      end: 'now',
    },
    role: 'Frontend-разработчик',
    imagePath: 'kardo.jpg',
  },
  {
    name: 'ИП Сапрыкин В.М. (SpaceChat)',
    description:
      'Разработал ключевые экраны и основную логику приложения: pixel-perfect вёрстка, кеширование данных, debounce, infinite-scroll и realtime через WebSocket.',
    stack: ['React', 'Scss (modules)', 'Redux-toolkit', 'TypeScript'],
    period: {
      start: '28.12.2024',
      end: '01.08.2025',
    },
    role: 'Frontend-разработчик',
    imagePath: 'spaceChat.png',
  },
  {
    name: 'Фриланс',
    description:
      'Верстал и интегрировал сайты и лендинги: адаптивная и кроссбраузерная вёрстка, оптимизация загрузки, интеграция форм и простая бэкенд-логика на PHP/WordPress',
    stack: ['HTML', 'Css/sass/scss', 'JavaScript', 'PHP', 'CMS Wordpress'],
    period: {
      start: '29.07.2024',
      end: '01.10.2024',
    },
    role: 'Frontend-разработчик / Верстальщик',
    imagePath: 'kwork.webp',
  },
]
