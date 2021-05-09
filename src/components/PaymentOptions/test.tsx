import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'
import cardsMock from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    )

    expect(screen.getByLabelText(/2502/)).toBeInTheDocument()
    expect(screen.getByLabelText(/1988/)).toBeInTheDocument()
    expect(screen.getByText(/add new credit card/i)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    )

    // teste para evento de click
    userEvent.click(screen.getByLabelText(/2502/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /2502/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is select', async () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByLabelText(/2502/)) // seleciona o cartão
    userEvent.click(screen.getByRole('button', { name: /buy now/i })) // clica no botão de comprar

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
