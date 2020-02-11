import {action, computed, observable, runInAction} from "mobx";

import {Kelvins} from "./constants";

class Store {
  @observable itemDetailsArray = [
    ["Класс", "Standart"],
    ["Потребляемая мощность", "50 Вт"],
    ["Сила света", "3459 Люмен ..."],
    ["Гарантия", "3 года"],
    ["Монтаж", "Да"],
    ["Итого сумма", "2594 рублей"],
  ];
  @observable currentKelvin = Kelvins[0];
  @observable showRightMenu = false;
  @observable showInfo = false;
  @observable imageIndex= 0;

  @action.bound
  setKelvin(kelvin) {
    this.currentKelvin = kelvin;
    this.imageIndex = 0;
  }

  @action.bound
  toggleMenuButton() {
    this.showRightMenu = !this.showRightMenu;
  }

  @action.bound
  setImageIndex(index) {
    this.imageIndex = index;
  }

  @action.bound
  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }

}

export const store = new Store();
