import React from 'react'

import { renderWithTheme } from 'utils/render-with-theme'

import * as BaseFormLayout from '.'

describe('<BaseFormLayout />', () => {
  it('should render the BaseFormLayout', () => {
    const { container } = renderWithTheme(
      <BaseFormLayout.FormWrapper>
        <BaseFormLayout.Form>
          <button>submit teste</button>
        </BaseFormLayout.Form>
      </BaseFormLayout.FormWrapper>
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class=""
      >
        <form
          class=""
        >
          <button>
            submit teste
          </button>
        </form>
      </div>
    `)
  })
})
