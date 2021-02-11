# Notes

## Synchronous

Kan meteen

## Asynchronous

Duurt even

- Iets ophalen uit een database
- Iets opsturen naar server
- Iets naar een bestand schrijven

## Promise

- Wat is een Promise?
- "De verwachting van data"
- Dus niet de data

## Hoe "ruil" je promise om voor de data?

- await je promise in een async function
- async / await

## Probleem met asynchronous functies

- Iets ophalen uit een database
  - Bestaat niet -> error?
  - Staat de database aan? -> error!
  - Misschien is de database heeeel druk op moment -> error!
  - Misschien mag deze app deze data niet ophalen -> error
- Iets ophalen naar server
  - We rijden door een tunnel! geen internet! error!
  - Misschien staat die server niet aan! error!
  - Misschien url niet geldig! error!

## Error handling!

- try / catch in javascript
  - try en catch hebben een local scope
- try -> code voor als alles lukt
  - De app laten werken (de data laten zien)
- catch -> code voor als het niet lukt!
  - Feedback geven aan gebruiker (een foutmelding)

## Stappen plan: request maken

- [x] Axios installeren
- [x] Axios importeren
- [x] URL / URI opzoeken van de api: "https://api.kanye.rest?format=text"
- [x] async function maken!
- [x] GET request maken -> axios.get(url)
- [x] await de PROMISE die terug krijgen
- [x] De response aan de gebruiker laten zien (happy path)
- [x] Error handling (unhappy path) -> try catch
- [x] Error laten zien aan de gebruiker

TODO:

- URI vs URL
- Commit all the things? -> per feature
- CORS -> CROSS ORIGIN RESOURCE SHARING: \

## Features

- Fetch dogs -> Show images (on a webpage)
- Show error -> So (drunk) users don't call support
- Show loading -> So (drunk) users don't click away

## Stappen plan SHOW

- [x] HTML bestand
- [x] JS bestand
- [x] CSS bestand
- [x] Koppelen (link, script)
- [x] NPM init
- [x] Axios installeren
- [x] URL opzoeken: https://dog.ceo/api/breed/schnauzer/images
- [x] Async function
- [x] Aanroepen van de functie
- [x] Axios script importeren
- [x] GET request maken
- [x] Promise awaiten
- [x] Response checken (wat voor data krijgen we)
- [x] Loop over de array
- [x] Voor elke string (imageUrl)
- [x] Element aanmaken: `<img />` ()
- [x] src toevoegen -> `<img src="URL HERE">`
- [x] alt toevoegen (voor mensen die niet kunnen zien)
- [x] List element maken in de HTML (met een id)
- [x] List selecteren
- [x] Appenden -> List.append(img)

## Stappen plan SHOW ERROR

- [x] try / catch toevoegen
- [x] Wat er nu is in de functie gaat in `try`
- [x] Veroorzaak een error -> check de error
- [x] Maak een error message (string)
- [x] Element maken
- [x] textContent setten naar de error message
- [x] gallery selecteren
- [x] Appenden aan de gallery
