import React from 'react';
import App from './App';
import { render, fireEvent, cleanup } from '@testing-library/react';

const renderApp = () => render(<App />);

let display, num1, num2, selectedOperation, add, sub, mul, div, clear, calc, error;

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  let { getByTestId } = renderApp();
  num1 = getByTestId('num1');
  num2 = getByTestId('num2');
  selectedOperation = getByTestId('selected-operation');
  add = getByTestId('add');
  sub = getByTestId('sub');
  mul = getByTestId('mul');
  div = getByTestId('div');
  clear = getByTestId('clear');
  calc = getByTestId('calc');
  display = getByTestId('display');
  error = getByTestId('error');
});

test('calculator mounts', () => {
  expect(display).toHaveTextContent('');
  expect(num1).toHaveTextContent('');
  expect(num2).toHaveTextContent('');
  expect(selectedOperation).toHaveTextContent("+");
  expect(add).toHaveTextContent("+");
  expect(sub).toHaveTextContent("-");
  expect(mul).toHaveTextContent("x");
  expect(div).toHaveTextContent("/");
  expect(clear).toHaveTextContent("Clear");
  expect(error).toHaveTextContent('');
});

test('addition works', () => {
  fireEvent.input(num1, {
    target: { value: '9' }
  });
  fireEvent.input(num2, {
    target: { value: '9' }
  });
  fireEvent.click(add);
  fireEvent.click(calc);
  expect(display).toHaveTextContent(18);
  expect(selectedOperation).toHaveTextContent("+");
  expect(error).toHaveTextContent('');
});

test('subtraction works', () => {
  fireEvent.input(num1, {
    target: { value: '9' }
  });
  fireEvent.input(num2, {
    target: { value: '9' }
  });
  fireEvent.click(sub);
  fireEvent.click(calc);
  expect(display).toHaveTextContent(0);
  expect(selectedOperation).toHaveTextContent("-");
  expect(error).toHaveTextContent('');
});

test('multiplication works', () => {
  fireEvent.input(num1, {
    target: { value: '9' }
  });
  fireEvent.input(num2, {
    target: { value: '9' }
  });
  fireEvent.click(mul);
  fireEvent.click(calc);
  expect(display).toHaveTextContent(81);
  expect(selectedOperation).toHaveTextContent("x");
  expect(error).toHaveTextContent('');
});

test('division works', () => {
  fireEvent.input(num1, {
    target: { value: '9' }
  });
  fireEvent.input(num2, {
    target: { value: '9' }
  });
  fireEvent.click(div);
  fireEvent.click(calc);
  expect(display).toHaveTextContent(1);
  expect(selectedOperation).toHaveTextContent("/");
  expect(error).toHaveTextContent('');
});

test('Clear works', () => {
  fireEvent.input(num1, {
    target: { value: '9' }
  });
  fireEvent.input(num2, {
    target: { value: '9' }
  });
  fireEvent.click(mul);
  fireEvent.click(clear);
  expect(num1).toHaveTextContent('');
  expect(num2).toHaveTextContent('');
  expect(selectedOperation).toHaveTextContent("+");
  expect(display).toHaveTextContent('');
  expect(error).toHaveTextContent('');
});

test('Zeroes are handled', () => {
  fireEvent.input(num1, {
    target: { value: '9' }
  });
  fireEvent.input(num2, {
    target: { value: '0' }
  });
  fireEvent.click(mul);
  fireEvent.click(calc);
  expect(display).toHaveTextContent(0);
  expect(error).toHaveTextContent('');
});

test('Errors are handled', () => {
  fireEvent.input(num1, {
    target: { value: '9' }
  });
  fireEvent.input(num2, {
    target: { value: 'j' }
  });
  fireEvent.click(calc);
  expect(display).toHaveTextContent('');
  expect(error).toHaveTextContent('Select Two Numbers');
});