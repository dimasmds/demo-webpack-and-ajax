import { getAllRestaurants } from './data';
import { renderRestaurantsList } from './dom';

import '../styles/style.css';

console.log('Hello, Dicoding!');

const restaurants = getAllRestaurants();
renderRestaurantsList(restaurants);
