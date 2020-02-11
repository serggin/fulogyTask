import React from 'react';

import Menu from './Menu';

const options = [
  {label: "Вариант кухни", extraClass: "blue-border"},
  {label: "Размеры", extraClass: "blue-border"},
  {label: "Сенсор", extraClass: "blue-border"},
  {label: "Питающий кабель", extraClass: "blue-border"},
  {label: "Блок питания", extraClass: "blue-border"},
  {label: "Цвет свечения", extraClass: "blue-border", selected: true},
  {label: "Монтаж", extraClass: "red-border"},
  {label: "Корзина", extraClass: "red-border"},
];

export default class BottomMenu extends React.Component {

  render() {
    return (
      <Menu
        menuClass="bottom-menu"
        optionClass="bottom-option"
        options={options}
        />
    );
  }
}
