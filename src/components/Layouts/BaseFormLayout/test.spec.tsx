import React from 'react'

import { renderWithProviders } from 'utils/render-with-providers'

import * as BaseFormLayout from '.'

describe('<BaseFormLayout />', () => {
  it('should render the BaseFormLayout', () => {
    const { container } = renderWithProviders(
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
