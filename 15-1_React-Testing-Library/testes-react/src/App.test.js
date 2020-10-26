import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Verificando se existe o campo email', () => {
  const { getByLabelText } = render(<App />);
  const inputEmail = getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verificando se existe um botão de enviar', () => {
  const { getByTestId } = render(<App />);
  const btn = getByTestId('id-send');
  expect(btn).toBeInTheDocument();
  expect(btn.type).toBe('button');
  expect(btn).toHaveValue('Enviar');
});

test('Verificando se existem dois botões', () => {
  const { getAllByRole } = render(<App />);
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(2);
});

test('Verifica se o botão e o campo email estão funcionando', () => {
  const { getByTestId, getByLabelText } = render(<ValidEmail email={ EMAIL_USER } />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor: ');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});
