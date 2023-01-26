// zaimporotwanie specjalnej funkcji [Hook], dzięki której najczęsciej
// pobiera się coś z serwera, zanim zaimportuje się komponent na ekranie
// [czyli można zrobić coś trochę szybciej, zanim pojawi się coś na ekranie]

// npm start => uruchomienie reacta
// CTRL + C => zatrzymanie reacta
// npm i axios => zainstalowanie biblioteki axios
import {useEffect, useState} from 'react'
import axios from 'axios'

function Home(){

    const [data, setData] = useState([])

    const getData = async () => {

        const response = await axios.get('http://localhost:5001/leki')

        //console.log(response) // do testowania tylko

        setData(response.data)

    }

    useEffect(() => {

        getData()

    }, [])
    return(
        <div>
        <h1>Lista leków:</h1>

        {
            data.map(lek => <h3>{lek.nazwa}</h3>)
        }
        </div>
    )
}

// wyeksportowanie całej funkcji

export default Home