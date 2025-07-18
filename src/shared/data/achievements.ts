export interface AchievementModel {
  title: string
  description: string
  imgLink: string
}

export const achievements: AchievementModel[] = [
  {
    title: 'KOKOC Hackatone (3-18 октября 2024)',
    description:
      'Занял 3-е место в хакатоне по веб-разработке. \nЗадача хакатона: разработать платформу для футбольного клуба и болельщиков. \nСостав команды: бэкендер, фронтендер (я), дизайнер. \nСтек фронтенда: HTML, CSS, JavaScript, Redux-toolkit, Vite',
    imgLink: 'Kokos-sertificate.png',
  },
]
