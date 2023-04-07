import React from 'react'

import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/render-with-theme'

import Modal from '.'

describe('<Modal />', () => {
  it('should render modal content', () => {
    renderWithTheme(
      <Modal isVisible>
        <h1>Modal</h1>
      </Modal>
    )

    const modalWrapper = screen.getByRole('presentation', { name: /modal/i })
    expect(modalWrapper).toBeInTheDocument()

    expect(modalWrapper.getAttribute('aria-hidden')).toBe('false')
    expect(modalWrapper).toHaveStyle({ opacity: 1 })

    const heading = screen.getByRole('heading', { name: /modal/i })
    expect(heading).toBeInTheDocument()
  })

  it('should not render modal when isVisible is false', () => {
    renderWithTheme(
      <Modal isVisible={false}>
        <h1>Modal</h1>
      </Modal>
    )

    const modalWrapper = screen.getByRole('presentation', { hidden: true })

    expect(modalWrapper.getAttribute('aria-hidden')).toBe('true')
    expect(modalWrapper).toHaveStyle({ opacity: 0 })

    const heading = screen.queryByRole('heading', { name: /modal/i })
    expect(heading).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(
      <Modal isVisible={true}>
        <h1>Modal</h1>
      </Modal>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
