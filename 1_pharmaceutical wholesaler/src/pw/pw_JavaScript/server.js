// plik nr 2 [ uruchomienie kodem w terminalu: node server.js ]
// niniejszy plik pełni u nas funkcję backend'u

const express = require('express') // zaimportowanie pobranej biblioteki
const leki = require('./data') // zaimportowanie leków
const cors = require('cors') // wyłączenie zabezpieczeń

const app = express()
app.use(express.json()) // umożliwia odbiór w formacie JSON
app.use(cors()) // wyłączenie zabezpieczeń, umożliwia testowanie

// stworzenie end point'u ( end pointy to są miejsca, do których strona internetowa się odwołuje, skąd pobiera albo dodaje )
// pierwszy endpoint - zwracanie informacji o lekach

app.get('/leki',(req, res) =>
{
    res.send(leki)
})

// dodawanie nowego leku z poziomu przeglądarki / klienta
// drugi endpoint - dodawanie nowego leku
app.post('/leki',(req,res) =>
{
    const nowyLek = req.body

    // console.log(nowyLek) // testowanie
    leki.push(nowyLek) // dodawanie

    res.send({
        message: 'lek dodany poprawnie'
    })
})

// postman

// uruchomienie samego servera

app.listen(5001, () => console.log('serwer uruchomiony')) // funkcja strzałkowa [ wyświetlenie komunikatu ]



// node server.js => uruchomienie servera
// CTRL + C => zatrzymanie serwera
// http://localhost:5001/leki
// JSON format [ wtyczka ]
// postman - testowanie back'endu
// npx create-react-app stronka => react
// cd stronka => wejście do stworzonego folderu
// npm start => uruchomienie strony

// npm i cors => wyłączenie zabezpieczeń w przeglądarce do testowania strony