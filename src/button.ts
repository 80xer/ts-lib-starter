import './style/button.style.scss';

const button = (text: string): HTMLButtonElement => {
  const buttonElement = document.createElement('button');
  buttonElement.classList.add('btn');
  buttonElement.textContent = text;
  return buttonElement;
};
export default button;
