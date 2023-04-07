import {
  format,
  parseISO,
  minutesToHours,
  secondsToMinutes,
  differenceInSeconds
} from 'date-fns'

export const formattingStringWithTheTimePassedBetweenTwoDate = (
  hours: number,
  minutes: number,
  seconds: number
): string => {
  if (hours < 1 && minutes < 1) {
    return `${seconds} seconds ago`
  }

  let formattedTime = ''

  if (hours > 0) {
    formattedTime = `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`
  } else if (hours < 1) {
    formattedTime = `${minutes} minutes ago`
  }

  return formattedTime
}

export const rangeOfTimePassedBetweenTwoDates = (
  start: string,
  end: string
): string => {
  const startDate = parseISO(start)
  const endDate = parseISO(end)

  const allSeconds = differenceInSeconds(endDate, startDate)
  const allMinutes = secondsToMinutes(allSeconds)

  const minutesInSeconds = allMinutes * 60
  const seconds = allSeconds - minutesInSeconds

  const hours = minutesToHours(allMinutes)

  const hoursInMinutes = hours * 60

  const minutes = allMinutes - hoursInMinutes

  return hours > 24
    ? format(new Date(startDate), 'dd/MM/yyyy')
    : formattingStringWithTheTimePassedBetweenTwoDate(hours, minutes, seconds)
}
