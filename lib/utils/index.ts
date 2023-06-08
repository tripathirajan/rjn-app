import { replace } from 'lodash'
import numeral from 'numeral'
import { format, formatDistanceToNow } from 'date-fns'

/**
 * @description Get color from given text
 * @param {string} inputText
 * @returns
 */
export const stringToColor = (inputText: string) => {
  let hash = 0
  let i
  const textLength = inputText.length
  /* eslint-disable no-bitwise */
  for (i = 0; i < textLength; i += 1) {
    hash = inputText.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substr(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}
/**
 * @description Get alpha character for Avatars eg. 'J. Doe' => 'JD'
 * @param {string} name
 * @returns
 */
export const stringAvatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  }
}

/**
 * @description Get initials eg. 'J. Doe' -> 'JD'
 * @param {string} name
 * @returns
 */
export const getInitials = (name = '') =>
  name
    .replace(/\s+/, ' ')
    .split(' ')
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join('')

/**
 * desc -  truncate larger data
 * @param {string} data
 * @param {Number} limit
 */
export const truncateData = (data: string, limit = 20) => {
  return data && data.length > limit ? data.substr(0, limit - 1) + '....' : data
}

/**
 * @description Get filename from url eg. 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' => 'googlelogo_color_272x92dp.png'
 * @param {string} url
 * @returns
 */
export const getFilenameFromUrl = (url: string) => {
  if (url && url !== '') {
    url =
      url.indexOf(String.fromCharCode(92)) > -1 ? url.replaceAll(String.fromCharCode(92), String.fromCharCode(47)) : url
    const chunks = url.split(String.fromCharCode(47))
    return chunks.length > 0 ? chunks[chunks.length - 1] : ''
  }
  return ''
}

// number formator

/**
 * @description number to currency
 * @param {Number} number
 * @returns
 */
export function toCurrency(number: number) {
  return numeral(number).format(Number.isInteger(number) ? '$0,0' : '$0,0.00')
}

/**
 * @description number to percent
 * @param {Number} number
 * @returns
 */
export function toPercent(number: number) {
  return numeral(number / 100).format('0.0%')
}

/**
 * @description format string to number
 * @param {string} number
 * @returns
 */
export function toNumber(number: string) {
  return numeral(number).format()
}

/**
 * @description format number to ShortenNumber
 * @param {Number} number
 * @returns
 */
export function toShortenNumber(number: number) {
  return replace(numeral(number).format('0.00a'), '.00', '')
}

export function toData(number: number) {
  return numeral(number).format('0.0 b')
}

// date formater

export function toDate(date: Date) {
  return format(new Date(date), 'dd MMMM yyyy')
}

export function toDateTime(date: Date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm')
}

export function toDateTimeSuffix(date: Date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p')
}
/**
 * eg. 3 days ago
 * @param {Date} date
 * @returns
 */
export function fromToNow(date: Date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  })
}
