# 1er cour de JS  08/03/2023 MAKHLOUF Nolan

## Déplacement dans le terminal :
``` 
    --> cd (permet de se déplacer)
        --> ".." (en arrière); "\"(pour avancer)
    --> dir (permet de visualiser l'interieur d'un dossier)
```
https://developer.mozilla.org/fr/docs/Web/JavaScript (doc officiel JS "El Biblo")
www.regexpal.com (permet de tester des patternes dans les chaines de caractères)
autre outils: chat gpt (pour les assistés)

## 1) Les Variables:

Elements fondamentales de la programmation
```javascript
    var maVariable= "bonjour"; //attention a la syntaxe qui est sensible a la casse.
```
JavaScript prend en charge plusieurs types de données: string, number, booleen, array(tableau)



### 3 mots clé pour déclarer
```javascript
var// (interdits dans les programme a bannir!!)

let //(autorisé permet de déclarer une variable qui va être réaffecter plus tard mais qui est limité a son bloc code)

const//( autorisé aussi permet d'affecter une seul fois la variables elle ne pourra pas etre re affecter elle aussi est limité a son bloc code)
```

Plusieurs exemples
```javascript
var anotherVariable = 2; //camel case (meilleur)
var TheNumber43 = 43; //pascal case



let texte1 = 'ceci est une chaine de caractères';
console.log(texte1);

const tableau = [];
```
## Les tableaux

 Initialisation 
```javascript
const myArray =[1, 3 , 4 , 'hello']
console.log(myArray)
```
Plusieurs options avec les tableaux
```javascript

const nouvelleLongueurTableau = myArray.push('new element')
console.log(myArray)
console.log(nouvelleLongueurTableau)
```
Résultat 
```powershell
PS C:\Users\cotno\OneDrive\Documents\ECOLE COURS\devJS\JS> node .\index.js
[ 1, 3, 4, 'hello' ]
[ 1, 3, 4, 'hello', 'new element' ]
5
PS C:\Users\cotno\OneDrive\Documents\ECOLE COURS\devJS\JS>
```
Accéder au élements du tableau
```javascript
console.log(myArray[0])

myArray[0] = 'test';

console.log(myArray);

myArray.push(2)//permet d'ajouter un élements

myArray.splice(1 ,1) //supprimer  1 élément a partir de l'index 1
```
## Quelques exercices de Tableau
Exo1
```javascript

const monTab = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ,  9 , 10]
for (var i = 0; i < monTab.length; i++) {
    console.log(monTab[i]);

// autres exemples avec un callback

monTab.forEach((numero)=>{
    console.log(numero)
})
```
Exo2
```javascript
const monTabSemaine = ['lundi' , 'mardi' , 'mercredi' , 'jeudi' , 'bendredi' , 'samedi' , 'dimanche']
console.log(monTabSemaine[0])
//  affiche lundi
```
Exo3
```javascript
const Tabpaire = [ 0 , 2 , 4 , 6 , 8 , 10]
const valeurinit = 0;
const addition = Tabpaire.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  valeurinit
);

console.log(addition);
// sortie 30
```
Exo4
```javascript
const tabFruits = ['melon' , 'orange' , 'citron' , 'fraise', 'banane']
tabFruits.push('pêche')
console.log(tabFruits)
// sortie [ 'melon', 'orange', 'citron', 'fraise', 'banane', 'pêche' ]
```
Exo 5 
```javascript
const tabOiseaux = ['pigeon' , 'hirondelle' , 'corbeau' , 'aigle']
console.log(tabOiseaux.includes('faucon'))
// sortie false

const tabOiseaux = ['pigeon' , 'hirondelle' , 'corbeau' , 'aigle']
console.log(tabOiseaux.includes('hirondelle'))
// sortie true

// autres exemple avec une fonction
const birdFinde = (tab, birdName) => {
    return tab.includes(birdName)
}
```
Exo 6
```javascript
let tabPays = [ 'france', 'espagne', 'Australie', 'japon']
tabPays.sort()
console.log(tabPays)
//sortie [ australie , espagne , france , japon]
```
Exo 7 
```javascript
const tabMois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin','juillet','c long']
const mois3 = tabMois[2]
console.log(mois3)
// sortie mars
```
Exo 8
```javascript
const myArray =[25632, 3635521, 8958 ,102 ,65656]

const min = Math.min(...myArray)
const max = Math.max(...myArray)
console.log(myArray) // [ 25632,...]
console.log(...myArray) // 25632 3635521 8958 102 65656
console.log(max) // 3635521
console.log(min) // 102
// exemple avec une fonction

const getRandInt = (num) => {
    return Math.floor(Math.random() * num)
}
const tabNine = []

for ( let index = 0; index < 7; index++){
    tabNine.push(getRandInt(index * 100))
}
console.log(tabNine)
```

Exo 9 
```javascript
let tableau5 = ["Toute idée a besoin pour moi d'un contrepied - Je ne puis supporter les vérités admises.",
"La justice est une idée d'avare","Une idée qui n'est pas dangereuse ne mérite pas d'être appelée une idée"];
let phrasePlusLongue = "";
for (let index =0; index < Array.length; index ++){
  if(tableau5[index].length > phrasePlusLongue){
    phrasePlusLongue = tableau5[index];
  }
}
console.log(phrasePlusLongue);


```
# 2ème cours de JS 10/03/2023
## vidéo youtube intéressente (bien se concentrer sur html, css, js avant de vouloir aller plus loin).



## Structures de controle

Les deux structure de contrôle de base en JavaScript sont les instructions conditionnelles (ou conditions)
 et les boucles.

### Les instruction conditionelles
Elles permettes de prendre des décision en fonctions de certaines conditions.

L'instruction if permet de spécifier une condition.
```javascript

    let age = 15 
    if (age >=18){
        console.log("vous êtes majeur!")
    } else{
        console.log("vous etes mineurs !" )
    }

```

L'opérateur ternaire en JS est une version abrégée de l'instrucition if/else 

```javascript
const age = 25
const statut = (age >= 18)  ? "majeur" : "mineur"

console.log(statut) //affiche "majeur

let newStatus = ''

if (age >=18) {
    newStatus='majeur'

} else {
    newStatus = 'mineur'
}
console.log(newStatut)
```

Les boucles

La boucle for permet par exemple de parcourir des tableaux.
```javascript
const myArray = [1, 3, 443534, 'ljljjj', true, 'test']
for (let index = 0; index < myArray.lenght; index++){
    const element = myArray[index]
    console.log(element)
}
```
La syntaxe des objets en JS (La boucle for in)
```javascript
let myObject = {
    firstname: 'John',
    lastname: 'Doe',
    age : 45,
    mailVerified: true
    password: 'azerty123',
}

for (const key in myObject){
    const element = myObject[key]
    console.log(key)
}
const value : any
for const(value of myObject){
    console.log(value)
}
```
### Les fonctions

Une fonction en JS est un bloc de code qui peut être appelé et éxecuté plusieurs fois à partir de différent endroits.

```javascript

function nom_de_la_fonction(): number 
function nom_de_la_fonction() {
    return 1
}
```
Commence toujours par le mot function suivi du nom de la fonction.

```javascript
// declaration de fonction

function sum (number1, number2) {
 return number1 + number2
}
// autre exemple de declaration

const sum = function(number1,number2){
  return number1 + number2
}

// declaration fléchées très importante !!
const sum = (number1, number2) => number1 + number2 //return implicite


const sum = (number1, number2) => { // return non implicite
  return number1 + number2 } 

// appel de fonction
const resul = sum(13, 12)

console.log(resul)
```
Usage des callbacks


 (? signifi un paramètre optionnel)


 ```javascript
 setTimeout(
  function()  {
  console.log('Hello, world');
}
,

 3000);

 console.log('hello again')


 //autre exemple de notation simplifié fléchée
 setTimeout(
  () =>  {
  console.log('Hello, world');
}
,

 3000);

 console.log('hello again')
 ```

## Maintenant des exercices sur les fonctions

Exo 1 
```javascript
//declare
function sum (number1, number2) {
 return number1 + number2
}
//appel

const resul = sum(13, 12)

console.log(resul)
//sortie 25
```
Exo2
```javascript

function trouveLeMax(param){
  let max = Math.max(...param)// ". . . " correspond au spread qui sert a éclaté l'ensemble des élement d'un tableau mais peut aussi fonctionner avec les objets
  return max
}

const myArray =[25632, 3635521, 8958 ,102 ,65656]
const result = trouveLeMax(myArray)
console.log(result)
// sortie 3635521
```
Exo3
```javascript
function removeVowels(str){
    return str.replace(/[aeiouy]/gi,'') //
}
const result = removeVowels('Bonjour animal');
console.log(result);
``` 
Exo4
```javascript
function numberToWords(num) {
    const ones = ['','one','two','three','four','five','six','seven','eight',]
    const tens = ['','','twenty','thirty','fourty','fifty','sixty','seventy','eighty','nighty']
    const teens =['ten','eleven','twelve','thirteen','fourteen','fifteen','seventeen','eighteen','nineteen']

    if(num < 10 ) {
        return ones[num]
    } else if (num< 20){
        return teens [num - 10]
    } else {
        return tens [Math.floor(num / 10 )] + '-' + ones [num % 10]
    }
    const result = numberToWords (45)
console.log(numberToWords)
}
 ```
 Exo5 
 ```javascript
const someObject = { // ceci est une variable de type objet
const someObject = { // ceci est une variable de type objet
    firsname: 'Nolan',
    Lastname: 'Makhlouf',
    age : 27,
    hasDriverLicence: true,
    placeOfBirth: 'Saint-Etienne'
    } 
    
    const objectArray = [{firsname: 'Nolan'},{Lastname: 'Makhlouf'},{age: 27}]
    
    const someFunction = (objectArray, str) => {
    
    //retourne la valeur de str dans chacun des objets contenus dans arr
    
    return objectArray.map((obj) => obj[str])
    
    }
    const result = someFunction(objectArray, age)
    console.log(objectArray, age)
// essai de la fonction map

const testArray = [1, 2, 3]
testArray.map((element) => {
    console.log(element)
})
//sortie 1 2 3
```
Exo 6
```javascript

function sortDescending(numbers) {
    return numbers.sort((a ,b)  => b - a)
}
const numbersArray = [
    1,
    2,
    3,
    4545,
    34565665665,
    545545455545484879956,
]
const result = sortDescending(numbersArray)
console.log(numbersArray)
```
Exo 7
```javascript
function majVoyelles(str) {

    return str.replace(/[aeiou]/i, voyelle => voyelle.toUppercase())
}
const result = majVoyelles ('salut mon pote tu me reconnait ?')
console.log(result)
```

Exo 8 
```javascript
const countVowels = (str) =>{
    return str.replace(/[aeiouy]/gi || '').lenght
}
```
Exo9
```javascript
const capitalizeCons = (str) => {
    return str.replace(/[aeiouy]/i, cons => cons.toUpperCase())
}
```
# 3ème cours de JS le 13/03/2023 et 15/03/2023
## exemple de promesse 
```javascript

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10)
        if (randomNumber % 2 === 0) {
            resolve(randomNumber)
           
        } else {
            reject(new Error('Le nombre est impair.'))
        }
        
    
    }, 1000)
    
})
promise 
    .then(result => console.log(result))
    .catch(error => console.error(error.message))
})
```
# Quelques commandes pour git
```git
$ git status "connaitre le status des fichiers dans le dépot git
$git init "initialise git"
$git add "permet de sauvegarder le changement effectué"
$git commit "permet d'envoyer le changement effectuer sur un fichier sur github"
```

github pages
https://pages.github.com/

Vercel permet de déployer gratuitement.

Netify 
# Un peut de notion sur Dom

https://developer.mozilla.org/fr/docs/Web/API/Document_object_model/Using_the_Document_Object_Model

# Exemples d'utilisation de Fetch

```javascript
<script>

        function fetchSomePokemons() {
            return fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    }

    fetchSomePokemons().then((httpResponse) => {
        console.log('httpResponse:',httpResponse)
        return httpResponse.json()

    }).then((pokemonList) => {
        console.log(pokemonList)
    })

    
    </script>
```
# 4ème cours de JS 16/03/2023

## vidéo The Official JavaScript Tierlist (fireship)
### Point dans la vidéo
Résultat de la tierlist sur a peu près 40k vôtes.   
les nouvelles feature du JS (les plus importantes pour progresser son TimeScript et React)
React: très facile d'utilisation l'approche est plus fonctionnel pas besoin d'ecrire le code lignes par lignes et aussi très facile de pouvoir copier des bloc de code entier sur d'autres parties du site.

librairie Vite+React
## beta.reactjs.org (à voir)
