function izracunajStruju() {
  ohmI.innerText = "I = " + (ohmU.value / ohmR.value).toFixed(2) + " A";
}

function izracunajUiz() {
  uiz.innerText = "Uiz = " +
    (uul.value * r2.value / (+r1.value + +r2.value)).toFixed(2) + " V";
}

function serijskiOtp() {
  rs.innerText = "R = " + (+sr1.value + +sr2.value + +sr3.value) + " Ω";
}

function paralelniOtp() {
  rp.innerText = "R = " +
    (1 / (1/pr1.value + 1/pr2.value + 1/pr3.value)).toFixed(2) + " Ω";
}

function serijskiC() {
  cs.innerText = "C = " +
    (1 / (1/cs1.value + 1/cs2.value + 1/cs3.value)).toFixed(2) + " F";
}

function paralelniC() {
  cp.innerText = "C = " + (+cp1.value + +cp2.value + +cp3.value) + " F";
}

function serijskiL() {
  ls.innerText = "L = " + (+ls1.value + +ls2.value + +ls3.value) + " H";
}

function paralelniL() {
  lp.innerText = "L = " +
    (1 / (1/lp1.value + 1/lp2.value + 1/lp3.value)).toFixed(2) + " H";
}

function izracunajLz() {
  lz.innerText = "L = " +
    (z.value * z.value * s.value / l.value).toFixed(6) + " H";
}

function izracunajXl() {
  xl.innerText = "Xl = " + (w.value * lin.value).toFixed(2) + " Ω";
}

function izracunajXc() {
  xc.innerText = "Xc = " + (1 / (wc.value * c.value)).toFixed(2) + " Ω";
}
