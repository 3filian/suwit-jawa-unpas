const getPilihanComputer = function () {
  const comp = Math.random();

  if (comp < 0.34) {
    return "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    return "orang";
  } else {
    return "semut";
  }
};

const rules = function (comp, player) {
  if (comp == player) {
    return "SERI!";
  } else if (player == "gajah" && comp == "orang") {
    return "MENANG!";
  } else if (player == "orang" && comp == "semut") {
    return "MENANG!";
  } else if (player == "semut" && comp == "gajah") {
    return "MENANG!";
  } else {
    return "KALAH!";
  }
};

const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGajah.className;
  const hasil = rules(pilihanComputer, pilihanPlayer);

  //   mengganti img komputer
  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

  //   mengganti panel tulisan
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const pOrang = document.querySelector(".orang");
pOrang.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pOrang.className;
  const hasil = rules(pilihanComputer, pilihanPlayer);

  //   mengganti img komputer
  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

  //   mengganti panel tulisan
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});

const pSemut = document.querySelector(".semut");
pSemut.addEventListener("click", function () {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pSemut.className;
  const hasil = rules(pilihanComputer, pilihanPlayer);

  //   mengganti img komputer
  const imgComputer = document.querySelector(".img-komputer");
  imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

  //   mengganti panel tulisan
  const info = document.querySelector(".info");
  info.innerHTML = hasil;
});
