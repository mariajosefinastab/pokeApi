document.getElementById('formularioPokemon').addEventListener('submit', function(e) {
    e.preventDefault(); // no se recarga la página

    const nombrePokemon = document.getElementById('nombrePokemon').value.toLowerCase();
    const urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    fetch(urlApi)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('cartaPokemon').style.display = 'block';
            document.getElementById('tituloPokemon').textContent = data.name.toUpperCase();

            const listaMovimientos = document.getElementById('estadisticasPokemon');
            listaMovimientos.innerHTML = '';

            const movimientos = data.moves.slice(0, 5);

            movimientos.forEach(movimiento => {
                const elementoMovimiento = document.createElement('li');
                elementoMovimiento.textContent = movimiento.move.name; // Mostrar nombre del movimiento
                listaMovimientos.appendChild(elementoMovimiento);
            });
        })
        .catch(error => {
            alert('Pokémon no encontrado');
            console.error('Error:', error);
        });
});