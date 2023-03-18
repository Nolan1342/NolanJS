# Projet HTML/CSS JavaScript

## Etape 1 & 2

Pour ma page HTML en terme de design j'ai voulu qu'elle reprenne les couleur emblématique de Pokémon.

J'ai aussi voulu mettre la police officiel de Pokémon pour une meilleur immersion voici la ligne utilisé afin de pouvoir se servir de la police.
```html
<link href="https://fonts.cdnfonts.com/css/pokemon-solid" rel="stylesheet">
```
puis je déclare la police dans mon CSS comme ceci
```CSS
font-family: 'Pokemon Solid', sans-serif;
```
Pareil pour le bouton qui est de la même couleur que le logo ainsi que la zone de saisi pour choisir son Pokémon.

Ci-dessous vous trouverez le code JS permette d'écouter l'évenement de clic sur le bouton

### Première fonction pour l'évenement du click du boutton
```javascript
//je récupère d'abord les éléments HTML permettant d'écouter l'évenement et je les stock dans des variables
const maBalisecontainer = document.getElementById ("container")
const monBoutton = document.getElementById("clickable")
const monTexte = document.getElementById("paragraphe")

// Ensuite je déclare ma fonction fetchPhotos qui ajoutera un text en HTML une fois le click effectué
function fecthPhotos() {
    monTexte.innerHTML = "Vous avez cliquer !";
}
// Puis j'appel ma fonction lorsque que l'évenement de click ce produit ce qui une fois fais m'affiche mon message.
monBoutton.addEventListener("click", function () {
    fecthPhotos()
})
```
## Etape 3 PokéApi

Après plusieurs test sur différentes API j'ai décidé de choisir PokéApi (fan et facile d'utilisation).

Le principe de ma page HTML est de pouvoir à partir d'un Pokédex de 151 Pokémons choisir 6 d'entre eux et de crées son équipe qui sera stockée et affichée dans un tableau. On peut aussi supprimer un Pokémon choisi afin de le remplacer par un autre.

### Voici les différentes étapes et lignes de codes.

Dans un premier temps j'ai initialisé un tableau vide qui contiendra l'équipe Pokémon.
```javascript
let equipe = [];
```
Ensuite j'ai créé une fonction searchPokémon qui va permettre de trouver chacun des 151 Pokémons mais surtout d'afficher leurs statistiques.
```javascript
function searchPokemon() {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase() // je récupere la valeur de mon input et je la force a être en minuscule afin de concorder avec les valeurs de l'Api
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then(response => response.json())
          .then(data => {
            document.getElementById('pokemonNameDisplay').textContent = data.name
            document.getElementById('pokemonNumber').textContent = data.id
            document.getElementById('pokemonType').textContent = data.types.map(type => type.type.name).join(', ')
            //Pour les stats suivante il fallait préciser le type de la stat demandée avec l'opérateur "==="
            document.getElementById('pokemonAttack').textContent = data.stats.find(stat => stat.stat.name === 'attack').base_stat 
            document.getElementById('pokemonDefense').textContent = data.stats.find(stat => stat.stat.name === 'defense').base_stat
            document.getElementById('pokemonSpeed').textContent = data.stats.find(stat => stat.stat.name === 'speed').base_stat
            document.getElementById('pokemonImage').src = data.sprites.front_default
            })
}
```
Une fois toutes ces données récuperées j'ai écris mon HTML de la manière suivante afin de présenter les données en colonnes et avec la police de mon CSS
```html
    <div id="container3" class="text1">
    <ul>
      <li><strong>N o m:</strong> <span id="pokemonNameDisplay"></span></li>
      <li><strong>N u m :</strong> <span id="pokemonNumber"></span></li>
      <li><strong>T y p e:</strong> <span id="pokemonType"></span></li>
      <li><strong>A t t:</strong> <span id="pokemonAttack"></span></li>
      <li><strong>D é f:</strong> <span id="pokemonDefense"></span></li>
      <li><strong>V i t:</strong> <span id="pokemonSpeed"></span></li>
    </ul>
    </div>
```
Avec cette ligne au dessus permettant l'affichage de l'image du Pokémon
```html
<img id="pokemonImage" src="">
```
J'ai voulu améliorer ma page avec la possibilité d'afficher jusqu'a 6 Pokémons d'ou la cration du tableau "équipe"

Les Pokémons seront stocké au maximum de 6 grâce a l'instruction conditionnelle suivante.
```javascript
if (equipe.length < 6) {
              equipe.push(data)// gâce à la fonction push j'alimente mon tableau
              updateTeamTable() //Puis j'appelle la fonction que j'aurai créé afin de mettre a jour le tableau
            }
          
          .catch(error => { // si une erreur de saisie est effectué j'affiche une alerte
            console.error(error)
            alert("Le Pokémon n'a pas été trouvé.")
          });
```
Vien ensuite la mise à jour de notre tableau avec la fonction updateEquipeTable ou j'ai choisis d'utiliser cette fois-ci deux boucles for et une condition.
```javascript
function updateEquipeTable() {
        const tableRows = document.getElementById('equipeTable').getElementsByTagName('tr'); // ma variable qui permet de représenter les lignes du tableau
        for (let i = 0; i < tableRows.length; i++) { // première boucle ou je parcours les lignes du tableau
          const tableCells = tableRows[i].getElementsByTagName('td');// puis a partir de la ligne actuelle je récupère les cellules
          for (let j = 0; j < tableCells.length; j++) {// je parcous ensuite chaque cellules de cette ligne 
            const index = i * 6 + j; // pertmet de trouver le Pokémons dans mon tableau equipe en multpiliant l'indice de la ligne par la longueur du tableau et en ajoutant l'indice de la colonne afin de trouver l'index équivalent.
            if (equipe[index]) { // avec cette condition si les deux indexs (celui du tableau equipe et celui calclué ) sont correcte alors on incère ce code HTML afin d'afficher l'image et le Nom du Pokémon
              tableCells[j].innerHTML = `
                <div>
                  <img src="${equipe[index].sprites.front_default}">
                  <br>
                  ${equipe[index].name}
                </div>
                <button onclick="removePokemon(${index})">Supprimer</button>
              `;
            } else {
              tableCells[j].innerHTML = ''; // sinon si les index ne sont pas bons on affiche rien.
            }
          }
        }
      }
```

Comme on peut le voir dans cette fonction j'ai choisi de créer un bouton supprimer à côté de chaque Pokémons sélectionner dans l'équipe. Il a donc fallut que je crais la fonction permettant de supprimer le Pokémon du tableau au moment ou l'évenement de click sur le bouton supprimer ce produits.

```javascript
        function removePokemon(index) {
        equipe.splice(index, 1);  //splice permet de supprimer des élements du tableau en paramètre je lui indique quels élements (donc celui qui correspond a ma variable index calculé avant ) et le nombre d'élements à supprimer (ici 1)
        updateEquipeTable(); // et j'appel cette fonction pour mettre a jour l'affichage du tableau
      }
```

Pour finir le nom des Pokémons étant en Anglais je me suis permis de mettre un index qui sous le format d'une liste déroulante affiche le nom des 151 Pokémons en anglais récuperer sur l'Api.

Céation du menu déroulant en html 

```html
<h3 class="text1">Index des Pokémons en anglais</h3>
    <select id="pokemonDropdown" aria-disabled="true"></select>
```
Puis la fonction qui permet de récupere les noms des Pokémons.
```javascript

const selectElement = document.getElementById("pokemonDropdown");

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(pokemon => { //forEach permet d'executer la fonction pokemon  sur tout les résultas
      const optionElement = document.createElement("option");// je crais donc un élement option pour chaque données que renvoi le résultat
      optionElement.textContent = pokemon.name; // puis j'assigne la valeur de mon élement option a celle présente dans l'Api 
      selectElement.appendChild(optionElement); // enfin j'affiche cette valeur dans mon select
    });
  })
```
### Etape final 
J'ai par la suite  créé mon dépot git et envoyer mes documents dessus.

Ensuite j'ai pu heberger ma page HTML grâce a github Pages disponible grâce au lien suivant "https://nolan1342.github.io/NolanJS/".






