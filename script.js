const boton = document.getElementById('buscar')
const resultado = document.getElementById('resultado')

boton.addEventListener('click', () => {

    let texto = document.getElementById('busqueda').value.toLowerCase()

    fetch('https://ghibliapi.vercel.app/films')

    .then(res => res.json())

    .then(datos => {

        resultado.innerHTML = ""

        datos.forEach(pelicula => {

            if (pelicula.title.toLowerCase().includes(texto) || pelicula.director.toLowerCase().includes(texto)) {

                resultado.innerHTML += `
                    <div>
                        <img src="${pelicula.image}">
                        <h2>${pelicula.title}</h2>
                        <p>Director: ${pelicula.director}</p>
                        <p>Año: ${pelicula.release_date}</p>
                        <p>Puntuación: ${pelicula.rt_score}</p>
                    </div>
                `
            }

        })

    })

})