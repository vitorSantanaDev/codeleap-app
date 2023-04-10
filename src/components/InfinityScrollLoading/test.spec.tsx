import React from 'react'

import EditForm from 'components/EditForm'
import { renderWithProviders } from 'utils/render-with-providers'

jest.mock('hooks/useStateSelector', () => ({
  useStateSelector: () => ({ state: { editPostModal: { postID: 22 } } })
}))

describe('<InfinityScrollLoading />', () => {
  it('should match snapshot', () => {
    const { container } = renderWithProviders(<EditForm />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
