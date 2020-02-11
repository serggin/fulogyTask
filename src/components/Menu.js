import React from 'react';

const MenuOption = ({option, optionClass}) => {
  const classes = "menu-option " + optionClass
    + (option.extraClass ? " "+option.extraClass : "")
    + (option.selected ? " selected" : "");
  return (
    <div className={classes}>
      <span>{option.label}</span>
    </div>
  );
}

export default class Menu extends React.Component {

  render() {
    const {menuClass, optionClass, options} = this.props;
    const classes = "menu " + menuClass;
    return (
      <div className={classes}>
        {options.map(option => {
          return (
            <MenuOption option={option} optionClass={optionClass} key={option.label}/>
          );
        })}
      </div>
    );
  }
}
