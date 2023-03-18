let equipe = []; // initialise un tableau vide pour ledéfis bonus du projet

      function searchPokemon() {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase()
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then(response => response.json())
          .then(data => {
            document.getElementById('pokemonNameDisplay').textContent = data.name
            document.getElementById('pokemonNumber').textContent = data.id
            document.getElementById('pokemonType').textContent = data.types.map(type => type.type.name).join(', ')
            document.getElementById('pokemonAttack').textContent = data.stats.find(stat => stat.stat.name === 'attack').base_stat
            document.getElementById('pokemonDefense').textContent = data.stats.find(stat => stat.stat.name === 'defense').base_stat
            document.getElementById('pokemonSpeed').textContent = data.stats.find(stat => stat.stat.name === 'speed').base_stat
            document.getElementById('pokemonImage').src = data.sprites.front_default
        
            // défis bonus du projet qui permet de créer son équipe Pokémon !
            if (equipe.length < 6) {
              equipe.push(data)
              updateEquipeTable()
            }
          })
          .catch(error => {
            console.error(error)
            alert("Le Pokémon n'a pas été trouvé.")
          });
      }
    

      function updateEquipeTable() {
        const tableRows = document.getElementById('equipeTable').getElementsByTagName('tr');
        for (let i = 0; i < tableRows.length; i++) {
          const tableCells = tableRows[i].getElementsByTagName('td');
          for (let j = 0; j < tableCells.length; j++) {
            const index = i * 6 + j;
            if (equipe[index]) {
              tableCells[j].innerHTML = `
                <div>
                  <img src="${equipe[index].sprites.front_default}">
                  <br>
                  ${equipe[index].name}
                </div>
                <button onclick="removePokemon(${index})">Supprimer</button>
              `;
            } else {
              tableCells[j].innerHTML = '';
            }
          }
        }
      }
            function removePokemon(index) {
        equipe.splice(index, 1);
        updateEquipeTable();
      }

 
const selectElement = document.getElementById("pokemonDropdown");

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(pokemon => {
      const optionElement = document.createElement("option");
      optionElement.textContent = pokemon.name;
      selectElement.appendChild(optionElement);
    });
  })


      