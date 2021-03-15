# weather-app-wu2

## Uppgift
Skapa en väderapp baserat på data från OpenWeatherMap API. Funktionalitet som krävs är möjlighet att se väder för en användarspecifierad plats. Se `CityInfoCard.vue` för data som förväntas visas på sidan.

1. Acceptera uppgiften på classroom och tanka ner github repot som skapas.
2. Återskapa funktionalitet från https://github.com/itggot-linus-styren/weather-app-wu2.
3. Gör anroppet till API baserat på användarens sökning i `CitySearchField.vue`.
3. Skapa en funktion som returnerar ett objekt med information som ska visas på sidan från API:et. Skicka detta objekt som parameter för `searchCity` event:et. Visa en alert ifall användarens sökning returnerar fel från API:et.
4. Visa all information på sidan i `CityInfoCard.vue`.
5. Pusha upp koden till github och verifiera att testet funkar under "pull requests".

Bonus uppgift:
- Installera och använd [RainbowVis-JS](https://github.com/anomal/RainbowVis-JS) för att skapa en färggradient som mappas till temperaturen returnerat av OpenWeatherMap API:et. Sätt färgen till bakgrundsfärgen. För att installera använder du npm:
```console
npm install --save rainbowvis.js
```
Lägg sedan till konfigurationen i main.js:
```javascript
import Rainbow from 'rainbowvis.js';

// ...
// Lägg till detta efter: const app = createApp(App);
// ...

app.config.globalProperties.rainbow = new Rainbow();
```

Använd biblioteket i komponenter med `this.rainbow`. Se här för tips hur du kan ändra CSS från javascript i vue: https://v3.vuejs.org/guide/class-and-style.html#binding-inline-styles

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Dependencies
- [mitt](https://github.com/developit/mitt)
- [OpenWeather](https://openweathermap.org/current)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
