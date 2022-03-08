import {
  getWeatherByCity,
} from './apiService.js';

const viewElems = {};

const getDOMElem = id => {
  return document.getElementById(id);
}

const connectHTMLElems = () => {
  viewElems.mainContainer = getDOMElem('mainContainer');
  viewElems.weatherSearchView = getDOMElem('weatherSearchView');
  viewElems.weatherForecastView = getDOMElem('weatherForecastView');

  viewElems.searchInput = getDOMElem('searchInput');
  viewElems.searchButton = getDOMElem('searchButton');
  viewElems.weatherCityContainer = getDOMElem('weatherCityContainergit');

  viewElems.weatherCity = getDOMElem('weatherCity');
  viewElems.weatherIcon = getDOMElem('weatherIcon');

  viewElems.weatherCurrentTemp = getDOMElem('weatherCurrentTemp');
  viewElems.weatherMaxTemp = getDOMElem('weatherMaxTemp');
  viewElems.weatherMinTemp = getDOMElem('weatherMinTemp');

  viewElems.returnToSearchBtn = getDOMElem('returnToSearchBtn');
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
      console.log(data);
      switchView();
    });
  }
}

const onClickSubmit = event => {
  let query = viewElems.searchInput.value;
  getWeatherByCity(query).then(data => {
    console.log(data);
    switchView();
  });
}

const switchView = () => {
  if (viewElems.weatherSearchView.style.display !== 'none') {
    viewElems.weatherSearchView.style.display = 'none';
    viewElems.weatherForecastView.style.display = 'block';
  } else {
    viewElems.weatherSearchView.style.display = 'block';
    viewElems.weatherForecastView.style.display = 'none';
  }
}


document.addEventListener('DOMContentLoaded', initializeApp);