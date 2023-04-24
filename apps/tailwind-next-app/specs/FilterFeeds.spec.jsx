import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FilterFeeds from 'components/FilterFeeds';

describe('FilterFeeds Component', () => {
  it('should render without crashing', () => {
    render(<FilterFeeds />);
    expect(screen.getByPlaceholderText('Search or type a command')).toBeInTheDocument();
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

  it('should call handleKeyUp on key up event in input field', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    render(<FilterFeeds />);

    const input = screen.getByPlaceholderText('Search or type a command');
    fireEvent.keyUp(input, { target: { value: 'test' } });

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith('Tecla soltada:', 'test');
    consoleLogSpy.mockRestore();
  });
});
