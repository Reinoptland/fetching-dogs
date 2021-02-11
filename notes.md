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
- try -> code voor als alles lukt
  - De app laten werken (de data laten zien)
- catch -> code voor als het niet lukt!
  - Feedback geven aan gebruiker (een foutmelding)

## Stappen plan: request maken

- [x] Axios installeren
- [x] Axios importeren
- [ ] URL / URI opzoeken van de api: "https://api.kanye.rest?format=text"
- [ ] async function maken!
- [ ] GET request maken -> axios.get(url)
- [ ] await de PROMISE die terug krijgen
- [ ] De response aan de gebruiker laten zien (happy path)
- [ ] Error handling (unhappy path) -> try catch
- [ ] Error laten zien aan de gebruiker

TODO: URI vs URL
