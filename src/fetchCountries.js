export function fetchCountries(name) {
  const url = `https://countries.dev/name/${encodeURIComponent(name)}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Country not found');
    }

    return response.json();
  }).then(countries => {
    return countries.map(country => ({
      name: {
        official: country.name,
      },
      capital: country.capital ? [country.capital] : [],
      population: country.population,
      flags: {
        svg: country.flags?.svg || '',
      },
      languages: Array.isArray(country.languages)
        ? country.languages.map(language => language.name)
        : [],
    }));
  });
}
