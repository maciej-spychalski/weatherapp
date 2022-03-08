import {
  getWeatherByCity,
} from './apiService.js';

const viewElems = {};

const getDOMELem = id => {
  return document.getElementById(id);
}

const connectHTMLElems = () => {
  viewElems.mainContainer = getDOMELem('mainContainer');
  viewElems.weatherSearchView = getDOMELem('weatherSearchView');
  viewElems.weatherForecastView = getDOMELem('weatherForecastView');

  viewElems.searchInput = getDOMELem('searchInput');
  viewElems.searchButton = getDOMELem('searchButton');
  viewElems.weatherCityContainer = getDOMELem('weatherCityContainergit ');

  viewElems.weatherCity = getDOMELem('weatherCity');
  viewElems.weatherIcon = getDOMELem('weatherIcon');

  viewElems.weatherCurrentTemp = getDOMELem('weatherCurrentTemp');
  viewElems.weatherMaxTemp = getDOMELem('weatherMaxTemp');
  viewElems.weatherMinTemp = getDOMELem('weatherMinTemp');

  viewElems.returnToSearchBtn = getDOMELem('returnToSearchBtn');
}

const setupLIsteneres = () => {
  viewElems.searchInput.addEventListener('keydown', onEnterSubmit);
  viewElems.searchButton.addEventListener('click', onClickSubmit);
}

const initializeApp = () => {
  connectHTMLElems();
  setupLIsteneres();
}

const onEnterSubmit = event => {
  if (event.key === 'Enter') {
    let query = viewElems.searchInput.value;
    getWeatherByCity(query).then(data => {
      console.log(data)
    });
  }
}

const onClickSubmit = event => {
  let query = viewElems.searchInput.value;
  getWeatherByCity(query).then(data => {
    console.log(data)
  });
}


document.addEventListener('DOMContentLoaded', initializeApp);