import cold from './cold.jpg';
import coldR1 from './cold-r1.jpg';
import coldR2 from './cold-r2.jpg';
import coldR3 from './cold-r3.jpg';
import day from './day.jpg';
import dayR1 from './day-r1.jpg';
import dayR2 from './day-r2.jpg';
import dayR3 from './day-r3.jpg';
import warm from './warm.jpg';
import warmR1 from './warm-r1.jpg';
import warmR2 from './warm-r2.jpg';
import warmR3 from './warm-r3.jpg';

import kelvinCold from './cold-small.jpg';
import kelvinDay from './day-small.jpg';
import kelvinWarm from './warm-small.jpg';


const itemImages = (name) => {
  if (name == "angular") {
    return {
      "cold": [cold, coldR1, coldR2, coldR3],
      "day": [day, dayR1, dayR2, dayR3],
      "warm": [warm, warmR1, warmR2, warmR3],
    }
  }
  return false;
}

const kelvinImages = () => (
  {
    "cold": kelvinCold,
    "day": kelvinDay,
    "warm": kelvinWarm,
  }
);

export {itemImages, kelvinImages}
