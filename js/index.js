
//#region  Products
const games = [
//1
  {
    name:`Destiny`,
    developer: `Blizzard`,
    price: 60,
    reviews:`positive`,
    image: `img/destiny-img.jpeg`    
  },
//2
  {
    name: `Fifa 19`,
    developer: `EA Sport`,
    price: 40,
    reviews:`mixed`,
    image: `img/fifa-19.png`
  },
//3
  {
    name: `Call Of Duty`,
    developer: `Activsion`,
    price: 70,
    reviews:`mostly positive`,
    image: `img/call-of-duty.jpeg`
  },
 //4 
  {
    name: `GTA V`,
    developer: `Rockstar Games`,
    price: 39.99,
    reviews:`positive`,
    image:`img/gta-5.jpeg`

  },
//5
   {
    name: `Rainbow Six Siege`,
    developer: `Ubisoft`,
    price: 11.99,
    reviews:`positive`,
    image: `img/ranibow-six-siege.jpeg`

  },
//6  
  {
    name: `Need For Speed`,
    developer: `EA`,
    price: 70,
    reviews:`mostly positive`,
    image: `img/need-for-speed.jpeg`

  },
//7  
  {
    name: `Halo`,
    developer: `Microsoft`,
    price: 60,
    reviews:`positive`,
    image: `img/halo-infinity.jpeg`
  },
//8
  {
    name:`Witcher 3`,
    developer:`CD Project Red`,
    price: 30,
    reviews: `positive`,
    image: `img/witcher-3.jpeg`
  },
 //9 
  {
    name:`Resident Evil 2`,
    developer:`Capcom`,
    price: 49.99,
    reviews: `mostly positive`,
    image: `img/resident-evil.jpeg`
  },
  //10
  {
    name:`Cyber Punk 2077`,
    developer:`CD Project Red`,
    price: 80,
    reviews: `very positive`,
    image: `img/cyber-punk-2077-2.jpeg`
  },
  //11
  {
    name:`GTFO`,
    developer:`10 Chambers Collective`,
    price: 15,
    reviews: ` positive`,
    image: `img/gtfo.jpeg`
  },
  //12
  {
    name:`Red Dead Redemption 2`,
    developer:`Rockstar games`,
    price: 80,
    reviews: ` positive`,
    image: `img/rd2.png`
  },
  //13
  {
    name:`Tekken 7`,
    developer:`Mandai Namco`,
    price: 27.99,
    reviews: ` mixed`,
    image: `img/tekken.jpeg`
  },
  //14
  {
    name:`Forza`,
    developer:`Microsoft`,
    price: 70,
    reviews: ` positive`,
    image: `img/forza.jpeg`
  },
  //15
  {
    name:`PUBG`,
    developer:`Ten Cent`,
    price: 49.99,
    reviews: ` mostly positive`,
    image: `img/pubg.jpeg`
  },
  //16
  {
    name:`Fortnite`,
    developer:`Epic Games`,
    price: 0,
    reviews: ` positive`,
    image: "img/fortnite.jpeg"
  },
  //17
  {
    name:`Dead or Alive`,
    developer:`Capcom`,
    price: 80,
    reviews: ` mixed`,
    image: `img/dead-or-live.png`
  },
  //18
  {
    name:`Bordelands 3 `,
    developer:`Rockstar games`,
    price: 69.99,
    reviews: ` positive`,
    image: `img/bordelands.png`
  },
  //19
  {
    name:`God of War`,
    developer:`Santa Monica studio`,
    price: 60,
    reviews: ` positive`,
    image: `img/god-of-war.jpeg`
  },
  //20
  {
    name:`Dead Rising 4`,
    developer:`Capcom`,
    price: 35,
    reviews: ` mixed`,
    image: `img/dead rising 4.jpeg`
  }
]


//#endregion

var isToggleOn = false;
let numInCart = 0;

function addHtmlData(game){

  let greatDeal= ``; 

  if(game.price < 20){
    greatDeal = ``
  }

 return `<div class="game0 id="bg-img" style="background-image: url('${game.image}')">
        <ul class="game-section">
          <li><h2>${game.name}</h2></li>
          <li><a class="publisher" href="#"> ${game.developer}</a></li>
          <li class = " review"> ${game.reviews}</li>
          <li class = "game-info cost" >price:$ ${game.price}</li>
          <div class="btn"><button class="card-btn" id="addBtn" >add to card</button></div>
        </ul>

      </div>`;
}



function showGames(game){
  // conect each obj from the incoming array to an html template
  const arrayOfGames = game.map(addHtmlData);
  const stringOfHtml = arrayOfGames.join('\n');
  document.getElementById('games').innerHTML = stringOfHtml;

}

//#region  Filters
function showDeals(game){
  if(game.price > 20){
    return true;
  } else{
    return false;
  }
}

// dropdown search
function isThisInCategory(prod){
  if(this == 'all'){
    return true;
  }else if(prod.developer == this){
    return true;
  } else{
    return false;
  }
}
// name search 
function isMatchingName(prod){
  if(prod.name.toUpperCase().includes(this.trim().toUpperCase())){
    return true;
  } else{
    return false;
  }
}

function toggleStoreMenu(event){
  var button = document.querySelector('.your-store-menu');
  button.classList.toggle('closed');


}

function toggleGameMenu(){
  var btn = document.querySelector('.game-category');
  btn.classList.toggle('closed2');

}



function loadDevCategory(event){
  // runs every time drop downs change 
  const categoryChose = event.target.value;
  //console.log(categoryChose);
  showGames(games.filter(isThisInCategory,categoryChose));
}

function searchGameName(){
  const nameImSearchingFor = event.target.value;
  showGames(games.filter(isMatchingName,nameImSearchingFor));

}

function addProductsToCart(){
  numInCart += 1;
  document.getElementById(`cartNum`).innerHTML = `${numInCart}`;
}

function goBack(){
  window.history.back();
}

//#endregion

//print full set 
showGames(games);

//showGames(games.filter(showDeals));

document.getElementById('backBtn').addEventListener('click', goBack);
document.getElementById('yr-store-btn').addEventListener('click', toggleStoreMenu);
document.getElementById('game-menu-btn').addEventListener('click',toggleGameMenu);
document.getElementById('addBtn').addEventListener('click',addProductsToCart);
// dropdown
document.getElementById('developerCategory').addEventListener('change',loadDevCategory);

//works with each char by input search by name
document.getElementById('gameName').addEventListener('input', searchGameName);






