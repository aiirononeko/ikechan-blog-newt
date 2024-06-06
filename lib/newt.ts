import { createClient } from 'newt-client-js'

export const createNewtClient = () => {
  return createClient({
    spaceUid: process.env.NEWT_ENV_SPACE_UID ?? '',
    token: process.env.NEWT_CDN_API_TOKEN ?? '',
    apiType: 'cdn'
  })
}
