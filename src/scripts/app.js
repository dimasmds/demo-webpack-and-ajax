import { getAllRestaurants } from './data';
import { renderRestaurantsList } from './dom';
import '../styles/style.css';

(async () => {
  const restaurants = await getAllRestaurants();
  renderRestaurantsList(restaurants);
})();
