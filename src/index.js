import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import countryCardTpl from './templates/country-card.hbs'
import countryListItemTpl from './templates/country-list-item.hbs'

const DEBOUNCE_DELAY = 300;


const refs = {
    searchBox: document.querySelector('input#search-box'),
    countryList: document.querySelector('.country-list'),
    countryInfo: document.querySelector('.country-info'),
};


refs.searchBox.addEventListener('input',
    debounce (renderCountriesInfo, DEBOUNCE_DELAY)
);

function renderCountriesInfo() {
    clearMarkup();
    const userInput = refs.searchBox.value.trim();

    if (userInput === '') {
        return clearMarkup()
    };

    fetchCountries(userInput)
        .then((countries) => {
            if (countries.length > 10) {
                return Notify.info("Too many matches found. Please enter a more specific name.")
            }
            if (countries.length >= 2 && countries.length <= 10) {
                createCountriesList(countries);
            }
            else {
                createCountryCard(countries);
            }
        })
        .catch(error => { Notify.failure("Oops, there is no country with that name") })
}


function createCountriesList(countries) {
    const markup = countryListItemTpl(countries);
    refs.countryList.insertAdjacentHTML('beforeend', markup);
}

function createCountryCard(countries) {
    const markup = countryCardTpl(countries);
    refs.countryInfo.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
    refs.countryList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
}