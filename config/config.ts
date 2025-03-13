export const META = {
  title: 'Radschnellweg 21 | Der neue Radschnellweg von Stuttgart nach Bietingheim-Bissingen',
  description:
    'Zwischen Stuttgart und Bietingheim-Bissingen entsteht der Radschnellweg RS 21. Informiere dich jetzt und hilf mit bei der Planung für einen besseren (Radschnell-)Weg in die Zukunft!',
}

/** @desc Enable/disable matomo tracking */
export const USE_MATOMO: boolean = false

export const BASE_CONFIG = {
  CMS_NAME: 'RS21',
  CMS_LOGO_PATH: '/icons/icon-48x48.png',
  GITHUB_REPO_NAME: 'rsv-rs21',
  PRODUCTION_URL: 'https://todo-rs21.de', // TODO
  META,
  USE_MATOMO,
  TRASSENSCOUT_PROJECT_API_URL: ['https://trassenscout.de/api/projects/rs21'],
}
