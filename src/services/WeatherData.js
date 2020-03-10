
// const key = '58GQLmP4lcGAs9iO8lhCuc1wVL3KC1x0';
const key = 'zaH11iZCpF95FQ1w8BMuwaQsdCOHsL6v';

export const getCityKey = async (location) => {
    try {
        const res = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${location}`, { mode: 'no-cors' });
        const data = await res.json();
        console.log(data)
        const cityKey = await data[0].Key;


        return cityKey;

    } catch (err) {
        console.log(err)
    }
}