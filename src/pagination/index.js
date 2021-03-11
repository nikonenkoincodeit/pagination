import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { getData } from '../api';
import { options, startPage } from './var';

const items = document.querySelector('.items');

const addItems = array =>
  array
    .map(({ overview }) => `<li>${overview}</li>`)
    .slice(0, 9)
    .join(' ');

const updatePage = str => (items.innerHTML = str);

const addPagination = () => {
  const pagination = new Pagination('pagination', options);
  pagination.on('beforeMove', async evt => {
    const { page } = evt;
    const { results } = await getData(page);

    if (results) {
      updatePage(addItems(results));
    } else {
      return false;
    }
  });
};

const start = async () => {
  const { total_pages, results } = await getData(startPage);
  options.totalItems = total_pages;
  updatePage(addItems(results));
  addPagination();
};

start();
