const _ = require('lodash');
import fetchCountry from './index';
import countryListItemTemplate from './countryList.hbs';
import shotList from './shotListname.hbs';
import { error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
defaultModules.set(PNotifyMobile, {});

const refs = {
  searchForm: document.querySelector('#input'),
  entryContent: document.querySelector('#entryContent'),
};

refs.searchForm.addEventListener('input', _.debounce(searchFormFunc, 2000));

function searchFormFunc(e) {
  const entryName = refs.searchForm.value;
  e.preventDefault();
  fetchCountry(entryName).then(countries => {
    dataFunc(countries);
  });
}
function dataFunc(data) {
  if (data.length > 10) {
    return error('Too many matches found, enter a more specific query!');
  }

  if (data.length > 1) {
    refs.entryContent.innerHTML = '';
    const shotListMarkup = shotList(data);
    refs.entryContent.insertAdjacentHTML('beforeend', shotListMarkup);
  } else {
    refs.entryContent.innerHTML = '';
    const markup = countryListItemTemplate(data);
    refs.entryContent.insertAdjacentHTML('beforeend', markup);
  }
}
