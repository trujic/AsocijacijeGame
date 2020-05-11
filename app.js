let counterPlayer = 2;
let playFirst = Math.floor((Math.random() * 2) + 1);
let whoPlays = () => {
  if (playFirst % 2 === 0) {
    document.querySelector("#arrow-img").style.display="block";
    document.querySelector("#arrow-img").style.margin="0px 0px 0px 75%";
    console.log(playFirst);
} else {
  document.querySelector("#arrow-img").style.transform="scaleX(-1)"
    document.querySelector("#arrow-img").style.display="block";
    document.querySelector("#arrow-img").style.margin="0px 0px 0px 19%";
    console.log(playFirst);
}
}



//Da li je kolona pogodjena
document.querySelector("#igraj").addEventListener("click", () => {
  document.querySelector("div.first-screen").style.display="none";
  document.querySelector("div.play-screen").style.display="block";
});

let counter = 0;
let timeleft = 150;

document.querySelector("#pocni-timer").addEventListener("click", () => {
  document.querySelector("#pocni-timer").style.display="none";
  let timer = document.querySelector("#odbrojavanje").innerHTML=(timeleft-counter);
  let interval = setInterval(timeIt, 1000);
  whoPlays();
  function timeIt() {
    counter++;
    let timer = document.querySelector("#odbrojavanje").innerHTML=(timeleft-counter);
    if (counter === timeleft) {
      clearInterval(interval);
      alert("Vreme je isteklo");
    }
  }



//MENJA POTEZ IGRACA
const promenaStrelice = () => {
  if (playFirst % 2 == 0) {
    document.querySelector("#arrow-img").style.transform ="scaleX(-1)";
    document.querySelector("#arrow-img").style.margin="0px 0px 0px 19%";
    playFirst++;
  } else {
     document.querySelector("#arrow-img").style.transform ="scaleX(1)";

     document.querySelector("#arrow-img").style.margin="0px 0px 0px 75%";
     playFirst++;
  }
}

const dalje = document.querySelector("#dalje-btn");
dalje.addEventListener("click", () => {
  promenaStrelice();
});


class Asocijacija {
    constructor(a1, a2, a3, a4, aKonacno, b1, b2, b3, b4, bKonacno, c1, c2, c3, c4, cKonacno, d1, d2, d3, d4, dKonacno, konacnoResenje) {
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
      this.a4 = a4;
      this.aKonacno = aKonacno;
      this.b1 = b1;
      this.b2 = b2;
      this.b3 = b3;
      this.b4 = b4;
      this.bKonacno = bKonacno;
      this.c1 = c1;
      this.c2 = c2;
      this.c3 = c3;
      this.c4 = c4;
      this.cKonacno = cKonacno;
      this.d1 = d1;
      this.d2 = d2;
      this.d3 = d3;
      this.d4 = d4;
      this.dKonacno = dKonacno;
      this.konacnoResenje = konacnoResenje;
    }
}

let Asocijacija1 = new Asocijacija ("Kuhinja", "Slano", "Natrijum", "Hlor", "So", "Kiseonik", "Vodonik", "Zedj", "Casa", "Voda", "Humor", "Ruka", "Udovica", "Noc", "Crno", "Odbojka", "Obala", "Suncobran", "Pesak", "Plaza", "More");
let Asocijacija2 = new Asocijacija ("Stablo", "Razdor","Sok", "Crvena", "Jabuka", "Sporost", "Masa", "Lenjost", "Kretanje", "Tromost", "Tezina", "Zemlja", "Sunce", "Privlacenje", "Gravitacija", "Pritisak", "Vuca", "Trenje", "Elasticnost", "Sila", "Njutn");
let Asocijacija3 = new Asocijacija ("Uniforma", "Hit", "Vojna", "Golman", "Parada", "Greben", "Crveni", "More", "Atol", "Koral", "Vatrene", "Pošta", "Prevoz", "Fijaker", "Kočije", "Slama", "Jasle", "Stoka", "Prostor", "Štala", "Konji");
let Asocijacija4 = new Asocijacija ("Osmeh", "Dunav", "Izbor", "Prostran", "Širok", "Lipe", "Kuće", "Glavna", "Slepa", "Ulica", "Saga", "Bogovi", "Prvi", "Veče", "Sumrak", "Tabak", "Roto", "Ofset", "Duboka", "Štampa", "Bulevar");
let Asocijacija5 = new Asocijacija ("Otpad", "Vode", "Pacovi", "Gradska", "Kanalizacija", "Zenica", "Švedska", "Legura", "Gvožđe", "Čelik", "Boca", "Bojler", "Upaljač", "Šporet", "Plin", "Šarac", "Gatling", "Maksim", "Nikoletina", "Mitraljez", "Cev");
let Asocijacija6 = new Asocijacija ("")


let gameCounter = 0;


//KOLONA a
document.querySelector("#a1").addEventListener("click", ()=> document.querySelector("#a1").innerHTML=(Asocijacija2.a1));
document.querySelector("#a2").addEventListener("click", ()=> document.querySelector("#a2").innerHTML=(Asocijacija2.a2));
document.querySelector("#a3").addEventListener("click", ()=> document.querySelector("#a3").innerHTML=(Asocijacija2.a3));
document.querySelector("#a4").addEventListener("click", ()=> document.querySelector("#a4").innerHTML=(Asocijacija2.a4));


//KOLONA b
document.querySelector("#b1").addEventListener("click", ()=> document.querySelector("#b1").innerHTML=(Asocijacija2.b1));
document.querySelector("#b2").addEventListener("click", ()=> document.querySelector("#b2").innerHTML=(Asocijacija2.b2));
document.querySelector("#b3").addEventListener("click", ()=> document.querySelector("#b3").innerHTML=(Asocijacija2.b3));
document.querySelector("#b4").addEventListener("click", ()=> document.querySelector("#b4").innerHTML=(Asocijacija2.b4));


//Kolona c

document.querySelector("#c1").addEventListener("click", ()=> document.querySelector("#c1").innerHTML=(Asocijacija2.c1));
document.querySelector("#c2").addEventListener("click", ()=> document.querySelector("#c2").innerHTML=(Asocijacija2.c2));
document.querySelector("#c3").addEventListener("click", ()=> document.querySelector("#c3").innerHTML=(Asocijacija2.c3));
document.querySelector("#c4").addEventListener("click", ()=> document.querySelector("#c4").innerHTML=(Asocijacija2.c4));


//Kolona d

document.querySelector("#d1").addEventListener("click", ()=> document.querySelector("#d1").innerHTML=(Asocijacija2.d1));
document.querySelector("#d2").addEventListener("click", ()=> document.querySelector("#d2").innerHTML=(Asocijacija2.d2));
document.querySelector("#d3").addEventListener("click", ()=> document.querySelector("#d3").innerHTML=(Asocijacija2.d3));
document.querySelector("#d4").addEventListener("click", ()=> document.querySelector("#d4").innerHTML=(Asocijacija2.d4));

let player1Score = 0;
let player2Score = 0;
let changeColorA = () => {
  if (playFirst % 2 === 0) {
    document.querySelector("#a1").style.color='blue';
    document.querySelector("#a2").style.color='blue';
    document.querySelector("#a3").style.color='blue';
    document.querySelector("#a4").style.color='blue';
    document.querySelector("#kolona-a").style.color='blue';
  } else {
    document.querySelector("#a1").style.color='#FF7373';
    document.querySelector("#a2").style.color='#FF7373';
    document.querySelector("#a3").style.color='#FF7373';
    document.querySelector("#a4").style.color='#FF7373';
    document.querySelector("#kolona-a").style.color='#FF7373';
  }
}

let changeColorB = () => {
  if (playFirst % 2 === 0) {
    document.querySelector("#b1").style.color='blue';
    document.querySelector("#b2").style.color='blue';
    document.querySelector("#b3").style.color='blue';
    document.querySelector("#b4").style.color='blue';
    document.querySelector("#kolona-b").style.color='blue';
  } else {
    document.querySelector("#b1").style.color='#FF7373';
    document.querySelector("#b2").style.color='#FF7373';
    document.querySelector("#b3").style.color='#FF7373';
    document.querySelector("#b4").style.color='#FF7373';
    document.querySelector("#kolona-b").style.color='#FF7373';
  }
}

let changeColorC = () => {
  if (playFirst % 2 === 0) {
    document.querySelector("#c1").style.color='blue';
    document.querySelector("#c2").style.color='blue';
    document.querySelector("#c3").style.color='blue';
    document.querySelector("#c4").style.color='blue';
    document.querySelector("#kolona-c").style.color='blue';
  } else {
    document.querySelector("#c1").style.color='#FF7373';
    document.querySelector("#c2").style.color='#FF7373';
    document.querySelector("#c3").style.color='#FF7373';
    document.querySelector("#c4").style.color='#FF7373';
    document.querySelector("#kolona-c").style.color='#FF7373';
  }
}
let changeColorD = () => {
  if (playFirst % 2 === 0) {
    document.querySelector("#d1").style.color='blue';
    document.querySelector("#d2").style.color='blue';
    document.querySelector("#d3").style.color='blue';
    document.querySelector("#d4").style.color='blue';
    document.querySelector("#kolona-d").style.color='blue';
  } else {
    document.querySelector("#d1").style.color='#FF7373';
    document.querySelector("#d2").style.color='#FF7373';
    document.querySelector("#d3").style.color='#FF7373';
    document.querySelector("#d4").style.color='#FF7373';
    document.querySelector("#kolona-d").style.color='#FF7373';
  }
}

//AKO NIJE POGODJENO PROMENI BOJU KOLONE A

let changeColorKonacnoA = () => {
  if (document.querySelector("#kolona-a") === Asocijacija2.aKonacno) {

  } else {
    if (playFirst % 2 === 0) {
      document.querySelector("#a1").style.color='#FF7373';
      document.querySelector("#a2").style.color='#FF7373';
      document.querySelector("#a3").style.color='#FF7373';
      document.querySelector("#a4").style.color='#FF7373';
      document.querySelector("#kolona-a").style.color='#FF7373';
    } else {
      document.querySelector("#a1").style.color='blue';
      document.querySelector("#a2").style.color='blue';
      document.querySelector("#a3").style.color='blue';
      document.querySelector("#a4").style.color='blue';
      document.querySelector("#kolona-a").style.color='blue';
    }
  }
}

let changeColorKonacnoB = () => {
  if (document.querySelector("#kolona-b") === Asocijacija2.bKonacno) {

  } else {
    if (playFirst % 2 === 0) {
      document.querySelector("#b1").style.color='blue';
      document.querySelector("#b2").style.color='blue';
      document.querySelector("#b3").style.color='blue';
      document.querySelector("#b4").style.color='blue';
      document.querySelector("#kolona-b").style.color='blue';
    } else {
      document.querySelector("#b1").style.color='#FF7373';
      document.querySelector("#b2").style.color='#FF7373';
      document.querySelector("#b3").style.color='#FF7373';
      document.querySelector("#b4").style.color='#FF7373';
      document.querySelector("#kolona-b").style.color='#FF7373';
    }
  }
}

let changeColorKonacnoC = () => {
  if (document.querySelector("#kolona-c") === Asocijacija2.cKonacno) {

  } else {
    if (playFirst % 2 === 0) {
      document.querySelector("#c1").style.color='blue';
      document.querySelector("#c2").style.color='blue';
      document.querySelector("#c3").style.color='blue';
      document.querySelector("#c4").style.color='blue';
      document.querySelector("#kolona-c").style.color='blue';
    } else {
      document.querySelector("#c1").style.color='#FF7373';
      document.querySelector("#c2").style.color='#FF7373';
      document.querySelector("#c3").style.color='#FF7373';
      document.querySelector("#c4").style.color='#FF7373';
      document.querySelector("#kolona-c").style.color='#FF7373';
    }
  }
}

let changeColorKonacnoD = () => {
  if (document.querySelector("#kolona-d") === Asocijacija2.dKonacno) {

  } else {
    if (playFirst % 2 === 0) {
      document.querySelector("#d1").style.color='blue';
      document.querySelector("#d2").style.color='blue';
      document.querySelector("#d3").style.color='blue';
      document.querySelector("#d4").style.color='blue';
      document.querySelector("#kolona-d").style.color='blue';
    } else {
      document.querySelector("#d1").style.color='#FF7373';
      document.querySelector("#d2").style.color='#FF7373';
      document.querySelector("#d3").style.color='#FF7373';
      document.querySelector("#d4").style.color='#FF7373';
      document.querySelector("#kolona-d").style.color='#FF7373';
    }
  }
}

let pogodjenaA = false;
let pogodjenaB = false;
let pogodjenaC = false;
let pogodjenaD = false;

document.querySelector("#kolona-a").addEventListener("click", ()=> {
  document.querySelector("#konacno-resenje").style.display="none";
  document.querySelector("#input-b").style.display="none";
  document.querySelector("#input-c").style.display="none";
  document.querySelector("#input-d").style.display="none";
  document.querySelector("#input-a").style.display="block";
});
let inputA = document.querySelector("#input-a");

const updateScore = () => {
  if (playFirst % 2 === 0){
  player2Score += 7;
  document.querySelector("#player-2-score").innerHTML = player2Score;

} else {
  player1Score +=7;
    document.querySelector("#player-1-score").innerHTML = player1Score;
}
}

inputA.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      let x = e.target.value;
      if ((x === Asocijacija2.aKonacno) || (x === Asocijacija2.aKonacno.toLowerCase())) {
        alert("Bravo, kolona A je pogodjena!");
        pogodjenaA = true;
        document.querySelector("#a1").innerHTML=(Asocijacija2.a1);
        document.querySelector("#a2").innerHTML=(Asocijacija2.a2);
        document.querySelector("#a3").innerHTML=(Asocijacija2.a3);
        document.querySelector("#a4").innerHTML=(Asocijacija2.a4);
        document.querySelector("#kolona-a").innerHTML=(Asocijacija2.aKonacno);
        changeColorA();
        updateScore();
        document.querySelector("#input-a").style.display="none";
      } else {
        alert("probaj ponovo");
        promenaStrelice();
        document.querySelector("#input-a").value = "";
        document.querySelector("#input-a").style.display="none";
      }
      }
});




document.querySelector("#kolona-b").addEventListener("click", ()=> {
  document.querySelector("#konacno-resenje").style.display="none";
  document.querySelector("#input-c").style.display="none";
  document.querySelector("#input-d").style.display="none";
  document.querySelector("#input-b").style.display="block";
});

let inputB = document.querySelector("#input-b");

inputB.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      let y = e.target.value;
      if ((y === Asocijacija2.bKonacno) || (y === Asocijacija2.bKonacno.toLowerCase())) {
        alert("Bravo, kolona B je pogodjena!");
        pogodjenaB = true;
        document.querySelector("#b1").innerHTML=(Asocijacija2.b1);
        document.querySelector("#b2").innerHTML=(Asocijacija2.b2);
        document.querySelector("#b3").innerHTML=(Asocijacija2.b3);
        document.querySelector("#b4").innerHTML=(Asocijacija2.b4);
        document.querySelector("#kolona-b").innerHTML=(Asocijacija2.bKonacno);
        document.querySelector("#input-b").style.display="none";
        changeColorB();
        updateScore();
      } else {
        alert("probaj ponovo");
        document.querySelector("#input-b").value = "";
        document.querySelector("#input-b").style.display="none";
      }
      }
});

document.querySelector("#kolona-c").addEventListener("click", ()=> {
  document.querySelector("#konacno-resenje").style.display="none";
  document.querySelector("#input-d").style.display="none";
  document.querySelector("#input-c").style.display="block";
});

let inputC = document.querySelector("#input-c");

inputC.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      let q = e.target.value;
      if ((q === Asocijacija2.cKonacno) || (q === Asocijacija2.cKonacno.toLowerCase())){
        alert("Bravo, kolona C je pogodjena!");
        pogodjenaC = true;
        document.querySelector("#c1").innerHTML=(Asocijacija2.c1);
        document.querySelector("#c2").innerHTML=(Asocijacija2.c2);
        document.querySelector("#c3").innerHTML=(Asocijacija2.c3);
        document.querySelector("#c4").innerHTML=(Asocijacija2.c4);
        document.querySelector("#kolona-c").innerHTML=(Asocijacija2.cKonacno);
        document.querySelector("#input-c").style.display="none";
        changeColorC();
        updateScore();
      } else {
        alert("probaj ponovo");
        document.querySelector("#input-c").value = "";
        document.querySelector("#input-c").style.display="none";
      }
      }
});

document.querySelector("#kolona-d").addEventListener("click", ()=> {
  document.querySelector("#konacno-resenje").style.display="none";
  document.querySelector("#input-d").style.display="block";
});

let inputD = document.querySelector("#input-d");

inputD.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      let w = e.target.value;
      if ((w === Asocijacija2.dKonacno) || (w === Asocijacija2.dKonacno.toLowerCase())) {
        alert("Bravo, kolona D je pogodjena!");
        pogodjenaD = true;
        document.querySelector("#d1").innerHTML=(Asocijacija2.d1);
        document.querySelector("#d2").innerHTML=(Asocijacija2.d2);
        document.querySelector("#d3").innerHTML=(Asocijacija2.d3);
        document.querySelector("#d4").innerHTML=(Asocijacija2.d4);
        document.querySelector("#kolona-d").innerHTML=(Asocijacija2.dKonacno);
        document.querySelector("#input-d").style.display="none";
        changeColorD();
        updateScore();
      } else {
        alert("probaj ponovo");
        document.querySelector("#input-d").value = "";
        document.querySelector("#input-d").style.display="none";
      }
      }
});


document.querySelector("#konacno").addEventListener("click", ()=> {
  document.querySelector("#konacno-resenje").style.display="block";
});


let inputKonacno = document.querySelector("#konacno-resenje");

  inputKonacno.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      let h = e.target.value;
      if ((h === Asocijacija2.konacnoResenje) || (h=== Asocijacija2.konacnoResenje.toLowerCase())) {
        document.querySelector("#konacno-resenje").style.display="none";
        alert("Cestitamo, resili ste nasu asocijaciju!");
        document.querySelector("#applause").play();
        document.querySelector("#konacno").innerHTML=(Asocijacija2.konacnoResenje);
        document.querySelector("#a1").innerHTML=(Asocijacija2.a1);
        document.querySelector("#a2").innerHTML=(Asocijacija2.a2);
        document.querySelector("#a3").innerHTML=(Asocijacija2.a3);
        document.querySelector("#a4").innerHTML=(Asocijacija2.a4);
        document.querySelector("#kolona-a").innerHTML=(Asocijacija2.aKonacno);

        //KOLONA b
        document.querySelector("#b1").innerHTML=(Asocijacija2.b1);
        document.querySelector("#b2").innerHTML=(Asocijacija2.b2);
        document.querySelector("#b3").innerHTML=(Asocijacija2.b3);
        document.querySelector("#b4").innerHTML=(Asocijacija2.b4);
        document.querySelector("#kolona-b").innerHTML=(Asocijacija2.bKonacno);

        //Kolona c

        document.querySelector("#c1").innerHTML=(Asocijacija2.c1);
        document.querySelector("#c2").innerHTML=(Asocijacija2.c2);
        document.querySelector("#c3").innerHTML=(Asocijacija2.c3);
        document.querySelector("#c4").innerHTML=(Asocijacija2.c4);
        document.querySelector("#kolona-c").innerHTML=(Asocijacija2.cKonacno);

        //Kolona d

        document.querySelector("#d1").innerHTML=(Asocijacija2.d1);
        document.querySelector("#d2").innerHTML=(Asocijacija2.d2);
        document.querySelector("#d3").innerHTML=(Asocijacija2.d3);
        document.querySelector("#d4").innerHTML=(Asocijacija2.d4);
        document.querySelector("#kolona-d").innerHTML=(Asocijacija2.dKonacno);
        if (playFirst % 2 === 0){
        changeColorKonacnoA();
        changeColorKonacnoB();
        changeColorKonacnoC();
        changeColorKonacnoD();
        player2Score += 20;
        document.querySelector("#player-2-score").innerHTML = player2Score;
      } else {
        changeColorKonacnoA();
        changeColorKonacnoB();
        changeColorKonacnoC();
        changeColorKonacnoD();
        player1Score +=20;
          document.querySelector("#player-1-score").innerHTML = player1Score;
      }
      //clearInterval(interval);
      document.querySelector("#applause").play();
      } else {
        alert("probaj ponovo");
        document.querySelector("#konacno-resenje").style.display="none";
        document.querySelector("#input-a").style.display="none";
        document.querySelector("#input-b").style.display="none";
        document.querySelector("#input-c").style.display="none";
        document.querySelector("#input-d").style.display="none";
        promenaStrelice();
      }
      }
});

//RESET ALL FOR NEW GAME
document.querySelector("#sledeca").addEventListener("click", () => {
  document.querySelector("#a1").innerHTML=("A1");
  document.querySelector("#a2").innerHTML=("A2");
  document.querySelector("#a3").innerHTML=("A3");
  document.querySelector("#a4").innerHTML=("A4");
  document.querySelector("#kolona-a").innerHTML=("Kolona A");

  document.querySelector("#b1").innerHTML=("B1");
  document.querySelector("#b2").innerHTML=("B2");
  document.querySelector("#b3").innerHTML=("B3");
  document.querySelector("#b4").innerHTML=("B4");
  document.querySelector("#kolona-b").innerHTML=("Kolona B");

  document.querySelector("#c1").innerHTML=("C1");
  document.querySelector("#c2").innerHTML=("C2");
  document.querySelector("#c3").innerHTML=("C3");
  document.querySelector("#c4").innerHTML=("C4");
  document.querySelector("#kolona-c").innerHTML=("Kolona C");

  document.querySelector("#d1").innerHTML=("D1");
  document.querySelector("#d2").innerHTML=("D2");
  document.querySelector("#d3").innerHTML=("D3");
  document.querySelector("#d4").innerHTML=("D4");
  document.querySelector("#kolona-d").innerHTML=("Kolona D");

  document.querySelector("#konacno").innerHTML=("???");

  if (gameCounter === 0) {
    Asocijacija2 = Asocijacija1;
    console.log(gameCounter);
  } else if (gameCounter === 1){
    Asocijacija2 = Asocijacija3;
    console.log(gameCounter);
  } else if (gameCounter === 2){
    Asocijacija2 = Asocijacija4;
  } else {
    Asocijacija2 = Asocijacija5;
  }
gameCounter++;
counter = 0;
timeleft = 151;

//VRACA BOJU
  document.querySelector("#a1").style.color=null;
  document.querySelector("#a2").style.color=null;
  document.querySelector("#a3").style.color=null;
  document.querySelector("#a4").style.color=null;
  document.querySelector("#kolona-a").style.color=null;

  document.querySelector("#b1").style.color=null;
  document.querySelector("#b2").style.color=null;
  document.querySelector("#b3").style.color=null;
  document.querySelector("#b4").style.color=null;
  document.querySelector("#kolona-b").style.color=null;

  document.querySelector("#c1").style.color=null;
  document.querySelector("#c2").style.color=null;
  document.querySelector("#c3").style.color=null;
  document.querySelector("#c4").style.color=null;
  document.querySelector("#kolona-c").style.color=null;

  document.querySelector("#d1").style.color=null;
  document.querySelector("#d2").style.color=null;
  document.querySelector("#d3").style.color=null;
  document.querySelector("#d4").style.color=null;
  document.querySelector("#kolona-d").style.color=null;

  document.querySelector("#input-a").value = "";
  document.querySelector("#input-b").value = "";
  document.querySelector("#input-c").value = "";
  document.querySelector("#input-d").value = "";
  document.querySelector("#konacno-resenje").value = "";

});


});

//This generates a random object to assign to our game
