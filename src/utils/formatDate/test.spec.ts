import {
  rangeOfTimePassedBetweenTwoDates,
  formattingStringWithTheTimePassedBetweenTwoDate
} from '.'

describe('formattingStringWithTheTimePassedBetweenTwoDate()', () => {
  it('should return only minutes formated when hours is less than 1', () => {
    const date = formattingStringWithTheTimePassedBetweenTwoDate(0, 35, 30)
    expect(date).toStrictEqual('35 minutes ago')
  })

  it('should return only hours formated when hours is greater than or equal to 1', () => {
    const onHour = formattingStringWithTheTimePassedBetweenTwoDate(1, 35, 30)
    expect(onHour).toStrictEqual('1 hour ago')

    const towHours = formattingStringWithTheTimePassedBetweenTwoDate(2, 35, 30)
    expect(towHours).toStrictEqual('2 hours ago')
  })

  it('should return only seconds formated when hours and minutes is less than 1', () => {
    const seconds = formattingStringWithTheTimePassedBetweenTwoDate(0, 0, 45)
    expect(seconds).toStrictEqual('45 seconds ago')
  })
})

describe('rangeOfTimePassedBetweenTwoDates()', () => {
  it('should return hours when time passed is less than or to equal 24 hours', () => {
    const timeInHours = rangeOfTimePassedBetweenTwoDates(
      '2023-04-07T00:39:24.364Z',
      '2023-04-07T16:39:24.364Z'
    )
    expect(timeInHours).toStrictEqual('16 hours ago')
  })

  it('should return formated date when time passed is greater than 24 hours', () => {
    const timeInHours = rangeOfTimePassedBetweenTwoDates(
      '2023-04-06T00:00:00',
      '2023-04-07T16:39:24.364Z'
    )
    expect(timeInHours).toStrictEqual('06/04/2023')
  })
})
