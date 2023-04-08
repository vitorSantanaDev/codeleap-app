import React from 'react'

import { renderWithProviders } from 'utils/render-with-providers'
import Loading from '.'

describe('<Loading />', () => {
  it('should render Loading correctly', () => {
    const { container } = renderWithProviders(<Loading />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        display: inline-block;
        width: 50px;
        height: 50px;
        border: 3px solid #999999;
        border-radius: 50%;
        border-top-color: #7695EC;
        -webkit-animation: ixZrDe 1s ease-in-out infinite;
        animation: ixZrDe 1s ease-in-out infinite;
        -webkit-animation: ixZrDe 1s ease-in-out infinite;
      }

      .c0 {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        min-height: 50rem;
      }

      <div
        class="c0"
      >
        <div
          class="c1"
        />
      </div>
    `)
  })
})
