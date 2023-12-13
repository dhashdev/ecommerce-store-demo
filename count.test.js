const { fireEvent } = require('@testing-library/react');

describe(Counter, () => {
  it('counter display correct value', () => {
    const { getByTestId } = render(<Counter intialCount={0} />);
  });
  const countValue = Number(getByTestId('count').textContent);
  expect(countValue).toEqual(0);

  it('count should increment by 1 on clicking increment btn', () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementButton = getByRole('button', { name: 'Increment' });
    fireEvent.click(incrementButton);
    const countValue = Number(getByTestId('count').textContent);
    expect(countValue).toEqual(1);
  });
});
