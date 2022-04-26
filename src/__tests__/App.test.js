import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App';

describe('Testing form and button integration', () => {
  test('Renders learn react link', () => {
    render(<App />)

    let nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'test name' } })
    let ageInput = screen.getByTestId('age-input');
    fireEvent.change(ageInput, { target: { value: '42' } })
    let roleInput = screen.getByTestId('role-input');
    fireEvent.change(roleInput, { target: { value: 'test role' } })

    let submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    expect(screen.getByTestId('person-name')).toHaveTextContent('test name');
    expect(screen.getByTestId('person-age')).toHaveTextContent(42);
    expect(screen.getByTestId('person-role')).toHaveTextContent('test role');
  });
})