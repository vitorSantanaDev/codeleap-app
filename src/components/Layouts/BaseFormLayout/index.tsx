import styled, { css } from 'styled-components'

import * as HeadingStyles from 'components/Heading/styles'
import * as TextInputStyles from 'components/TextInput/styles'
import * as TextAreaInputStyles from 'components/TextAreaInput/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper}, ${TextInputStyles.Wrapper}, ${TextAreaInputStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Form = styled.form``

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
