function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(194,206,242)"
}
function textbox_underline(box) {
  document.getElementById(box.id).style.borderColor = "rgb( 54, 95,217)"
}

/* ITEMS */

function item2() {
  R1 = parseFloat(document.getElementById("item2_R1").value)
  R2 = parseFloat(document.getElementById("item2_R2").value)
  R4 = parseFloat(document.getElementById("item2_R4").value)

  R3 = R1*R4/R2

  if (R3 > 10) {
    R3 = R3.toFixed(0)
  }
  else if (R3 < 1) {
    R3 = R3.toFixed(2)
  }
  else {
    R3 = R3.toFixed(1)
  }

  document.getElementById("item2_part_a").value = R3 + " Ω"
  document.getElementById("item2_part_a").name = R3
}

function item3() {
  per = parseFloat(document.getElementById("item3_per").value)
  C = parseFloat(document.getElementById("item3_C").value)
  R = parseFloat(document.getElementById("item3_R").value)

  C = C*0.1**6
  per = 100 - per

  Qn = C*7
  Q = Qn*(per/100)
  t = -1*Math.log(Q/Qn)*R*C

  t = t*10**5

  if (t < 1) {
    t = t*10
    ex = 6
  }
  else if (t > 10) {
    t = t/10
    ex = 4
  }
  else {
    ex = 5
  }

  t = t.toFixed(1)

  document.getElementById("item3_part_a").value = t + "*10^-" + ex + " s"
  document.getElementById("item3_part_a").name = t + "*10@Sup{-" + ex + "}"
}

function item5() {
  CD1 = parseFloat(document.getElementById("item5_CD1").value)
  D1 = parseFloat(document.getElementById("item5_D1").value)
  CD2 = parseFloat(document.getElementById("item5_CD2").value)
  D2 = parseFloat(document.getElementById("item5_D2").value)
  D3 = parseFloat(document.getElementById("item5_D3").value)

  D1 = D1/2
  D2 = D2/2
  D3 = D3/2

  pi = Math.PI

  Area1 = pi*D1**2
  Area2 = pi*D2**2

  I1 = Area1*CD1
  I2 = Area2*CD2

  I = I1 - I2
  Iabs = Math.abs(I)

  J = Iabs/(pi*D3**2)

  if (Iabs > 100) {
    I = Math.round(I/10)*10
  }
  else if (Iabs < 10) {
    I = I.toFixed(1)
  }
  else if (Iabs < 1) {
    I = I.toFixed(2)
  }
  else {
    I = I.toFixed(0)
  }

  if (J > 100) {
    J = Math.round(J/10)*10
  }
  else if (J < 10) {
    J = J.toFixed(1)
  }
  else if (J < 1) {
    J = J.toFixed(2)
  }
  else {
    J = J.toFixed(0)
  }

  if (isNaN(J)) {
    J = 0
  }

  document.getElementById("item5_part_a").value = I
  document.getElementById("item5_part_b").value = J
}

function item6() {
  EMF = parseFloat(document.getElementById("item6_EMF").value)
  Rb = parseFloat(document.getElementById("item6_Rb").value)
  Rv = parseFloat(document.getElementById("item6_Rv").value)
  per = parseFloat(document.getElementById("item6_per").value)

  I = EMF/(Rb + Rv)
  Vl = I*Rb
  V = EMF - Vl

  V2 = EMF - EMF*per/100
  Vlost = EMF*per/100
  I2 = Vlost/Rb
  Rv = V2/I2
  R = Rb/Rv

  if (V < 10) {
    V = V.toFixed(2)
  }
  else if (V > 100) {
    V = V.toFixed(0)
  }
  else {
    V = V.toFixed(1)
  }

  R = R*100

  if (R < 1) {
    ex = 3
    R = R*10
  }
  else if (R > 10) {
    ex = 1
    R = R/10
  }
  else {
    ex = 2
  }

  R = R.toFixed(2)

  document.getElementById("item6_part_a").value = V
  document.getElementById("item6_part_b").value = R + "*10^-" + ex
  document.getElementById("item6_part_b").name = R + "*10@Sup{-" + ex + "}"
}

function item7() {
  V1 = parseFloat(document.getElementById("item7_V1").value)
  V2 = parseFloat(document.getElementById("item7_V2").value)
  I = parseFloat(document.getElementById("item7_I").value)

  r = (V1 - V2)/I

  R = V2/I

  if (r < 0.01) {
    r = r.toFixed(4)
  }
  else if (r > 0.1) {
    r = r.toFixed(2)
  }
  else {
    r = r.toFixed(3)
  }

  if (R < 0.1) {
    R = R.toFixed(3)
  }
  else if (r > 1) {
    R = R.toFixed(1)
  }
  else {
    R = R.toFixed(2)
  }

  document.getElementById("item7_part_a").value = r
  document.getElementById("item7_part_b").value = R
}

function item8() {
  V = parseFloat(document.getElementById("item8_V").value)
  r = parseFloat(document.getElementById("item8_r").value)
  R = parseFloat(document.getElementById("item8_R").value)

  Rt = r + R + R/2
  I = V/Rt
  Vt = V - I*r

  Rt2 = r + 2*R
  I2 = V/Rt2
  Vt2 = V - I2*r

  if (Vt < 1) {
    Vt = Vt.toFixed(2)
  }
  else if (Vt > 10) {
    Vt = Vt.toFixed(0)
  }
  else {
    Vt = Vt.toFixed(1)
  }

  if (Vt2 < 1) {
    Vt2 = Vt2.toFixed(2)
  }
  else if (Vt2 > 10) {
    Vt2 = Vt2.toFixed(0)
  }
  else {
    Vt2 = Vt2.toFixed(1)
  }

  document.getElementById("item8_part_h").value = Vt
  document.getElementById("item8_part_i").value = Vt2
}

function item11() {
  I = parseFloat(document.getElementById("itemb_I").value)

  I = I*0.1**3

  V = I*4000
  I2 = V/8000
  It = I + I2
  V2 = V + 12 + 5001*It

  V3 = 12 - V - 5001*It
  V3abs = Math.abs(V3)

  if (V2 > 100) {
    V2 = Math.round(V2/10)*10
  }
  else if (V2 < 10) {
    V2 = V2.toFixed(1)
  }
  else {
    V2 = V2.toFixed(0)
  }

  if (V3abs > 100) {
    V3 = Math.round(V3/10)*10
  }
  else if (V3abs < 10) {
    V3 = V3.toFixed(1)
  }
  else {
    V3 = V3.toFixed(0)
  }

  document.getElementById("itemb_part_a").value = V2 + ", " + V3
}