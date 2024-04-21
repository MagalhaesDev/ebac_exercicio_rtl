import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir dois comentários', () => {
        render(<PostComment />);

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
});
