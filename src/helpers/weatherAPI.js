const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const res = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`);
  const data = await res.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`);
  const data = await res.json();
  const { location: { name: city, country: cntry },
    current: { temp_c: tempC, condition: { text, icon: ic } } } = data;
  return {
    name: city,
    country: cntry,
    temp: tempC,
    condition: text,
    icon: ic,
  };
};
