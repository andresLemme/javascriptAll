export default function getGeoLocation(id) {
    const idBox = document.getElementById(id),
    options = {
        enableHighAccurancy: true,
        Timeout: 5000,
        maximumAge: 0
    };

    const success = (position) => {
        const coords = position.coords;
        console.log(position)

        idBox.innerHTML = `
        <p>Tu posición actual es</p>
        <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Presición: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">ver mapa en google</a>
        `
    };

    const error = (err) => {
        idBox.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`
        console.log(`Error: ${err.code}: ${err.message}`)
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
}