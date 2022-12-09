import { screen } from '@testing-library/dom';
import button from '../src/button';

describe('display button', () => {
  document.body.innerHTML = `
    <div id="root"></div>
  `;
  const $root = document.querySelector('#root');
  test('button', () => {
    $root?.appendChild(button('OK'));
    expect(screen.getByText('OK')).toBeInTheDocument();
  });
});
