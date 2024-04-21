import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from '../Post'

test('inserir dois comentários', () => {
  render(<Post />);

  const textarea = screen.getByTestId('comment-textarea');
  const submitButton = screen.getByTestId('comment-submit-button');

  fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(submitButton);

  fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
  fireEvent.click(submitButton);

  const commentElements = screen.getAllByTestId('comment-content');
  expect(commentElements).toHaveLength(2);
  expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
  expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
});
