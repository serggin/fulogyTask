import React from 'react';

import Menu from './Menu';

const options = [
  {label: "Обучающее видео"},
  {label: "Оформление заказа"},
  {label: "Оплата"},
  {label: "Доставка"},
  {label: "Гарантия"},
  {label: "Возврат"},
  {label: "Контакты"},
  {label: "Партнеры"},
];

export default class RightMenu extends React.Component {

  render() {
    return (
      <Menu
        menuClass="right-menu"
        optionClass="right-option"
        options={options}
      />
    );
  }
}
