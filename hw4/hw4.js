function textbox_underline(box) {
  document.getElementById(box.id).style.borderColor = "rgb( 54,176,217)"
}
function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(194,230,242)"
}

/* ITEMS */

function item3() {
  A = parseFloat(document.getElementById("item3_A").value)
  d = parseFloat(document.getElementById("item3_d").value)
  k = parseFloat(document.getElementById("item3_k").value)
  V = parseFloat(document.getElementById("item3_V").value)

  A = A/(10**4)
  d = d/(10**3)

  eps = 8.85*0.1**12

  C = eps*A/d
  U1 = 0.5*k*C*V**2

  C2 = 0.5*(k + 1)*C
  U2 = 0.5*C2*V**2

  Q = C2*V
  U3 = (0.5*Q**2)/C

  W = U3 - U2

  U1 = (U1*10**10).toFixed(2)
  if (U1 > 10) {
    U1 = (U1/10).toFixed(2)
    document.getElementById("item3_part_a").value = U1 + "*10^-9"
  }
  else {
    document.getElementById("item3_part_a").value = U1 + "*10^-10"
  }

  U2 = (U2*10**10).toFixed(2)
  if (U2 > 10) {
    U2 = (U2/10).toFixed(2)
    document.getElementById("item3_part_b").value = U2 + "*10^-9"
  }
  else {
    document.getElementById("item3_part_b").value = U2 + "*10^-10"
  }

  U3 = (U3*10**10).toFixed(2)
  if (U3 > 10) {
    U3 = (U3/10).toFixed(2)
    document.getElementById("item3_part_c").value = U3 + "*10^-9"
  }
  else {
    document.getElementById("item3_part_c").value = U3 + "*10^-10"
  }

  W = (W*10**10).toFixed(2)
  if (W > 10) {
    W = (W/10).toFixed(2)
    document.getElementById("item3_part_d").value = W + "*10^-9"
  }
  else {
    document.getElementById("item3_part_d").value = W + "*10^-10"
  }

}

function item4() {
  C1 = parseFloat(document.getElementById("item4_C1").value)
  V1 = parseFloat(document.getElementById("item4_V1").value)
  V2 = parseFloat(document.getElementById("item4_V2").value)

  C2 = C1*(V1 - V2)/V2
  C2 = C2.toFixed(0)

  document.getElementById("item4_part_a").value = C2

}

function item5() {
  A = parseFloat(document.getElementById("item5_A").value)
  Cmin = parseFloat(document.getElementById("item5_Cmin").value)
  Cmax = parseFloat(document.getElementById("item5_Cmax").value)
  Ac = parseFloat(document.getElementById("item5_Ac").value)

  A = A*0.1**6
  Cmin = Cmin*0.1**12
  Cmax = Cmax*0.1**12
  Ac = Ac*0.1**12

  eps = 8.85*0.1**12

  Xmin = eps*A/Cmax
  Xmax = eps*A/Cmin

  F1 = 100*Xmin*Ac/(eps*A)
  F2 = 100*Xmax*Ac/(eps*A)

  Xmin = (Xmin*10**6)
  Xmax = (Xmax*10**6).toFixed(0)
  if (Xmin > 0.1) {
    Xmin = Xmin.toFixed(2)
    Xmax = Math.round(Xmax/10)*10
  }
  else {
    Xmin = Xmin.toFixed(3)
    Xmax = (Xmax*10**6).toFixed(0)
  }
  

  F1 = F1.toFixed(2)
  F2 = F2.toFixed(0)

  document.getElementById("item5_part_a").value = Xmin + "," + Xmax
  document.getElementById("item5_part_c").value = F1 + "," + F2

}

function item7() {
  C4 = parseFloat(document.getElementById("item7_C4").value)
  C5 = parseFloat(document.getElementById("item7_C5").value)

  C1 = C4
  C2 = C5
  C3 = C5

  C = (C1*(C2*(C3 + C4 + C5) + C5*(C3 + C4)) + C4*(C2*C3 + C2*C5 + C3*C5))/(C1*(C3 + C4 + C5) + C2*(C3 + C4 + C5) + C3*(C4 + C5))

  document.getElementById("item7_part_b").value = C.toFixed(1)

}

function item8() {
  x = parseFloat(document.getElementById("item8_tg").value)

  F = ((x - 2) + Math.sqrt((x - 2)**2 - 4))/2

  document.getElementById("item8_part_a").value = F.toFixed(1)

}

function item9() {
  l = parseFloat(document.getElementById("item9_l").value)
  Ra = parseFloat(document.getElementById("item9_Ra").value)
  Rb = parseFloat(document.getElementById("item9_Rb").value)
  Kliq = parseFloat(document.getElementById("item9_Kliq").value)
  Kv = parseFloat(document.getElementById("item9_Kv").value)

  Ra = Ra/1000
  Rb = Rb/1000

  eps = 8.85*0.1**12
  pi = Math.PI

  Cfull = (2*pi*eps*l*Kliq)/Math.log(Ra/Rb)
  Cempty = (2*pi*eps*l*Kv)/Math.log(Ra/Rb)

  Cfull = Math.round(Cfull*10**11)*10
  Cempty = Math.round(Cempty*10**11)*10

  document.getElementById("item9_part_b").value = Cfull
  document.getElementById("item9_part_c").value = Cempty

}

function item11() {
  C1 = parseFloat(document.getElementById("itemb_C1").value)
  C2 = parseFloat(document.getElementById("itemb_C2").value)
  C3 = parseFloat(document.getElementById("itemb_C3").value)
  Vab = parseFloat(document.getElementById("itemb_Vab").value)

  eps = 8.85*0.1**12

  C23 = C2*C3/(C2 + C3)
  V1 = C1*Vab/(C1 + C23)

  Q1 = C1*V1
  Q23 = C23*V1

  V2 = Q23/C2
  V3 = Q23/C3

  if (Q1 > 10) {
    Q1 = Q1.toFixed(0)
  }
  else {
    Q1 = Q1.toFixed(1)
  }

  if (Q23 > 10) {
    Q23 = Q23.toFixed(0)
  }
  else {
    Q23 = Q23.toFixed(1)
  }

  if (V1 > 10) {
    V1 = V1.toFixed(0)
  }
  else {
    V1 = V1.toFixed(1)
  }
  
  if (V2 > 10) {
    V2 = V2.toFixed(0)
  }
  else {
    V2 = V2.toFixed(1)
  }
  
  if (V3 > 10) {
    V3 = V3.toFixed(0)
  }
  else {
    V3 = V3.toFixed(1)
  }

  document.getElementById("itemb_part_a").value = Q1 + "," + Q23 + "," + Q23
  document.getElementById("itemb_part_b").value = V1 + "," + V2 + "," + V3

}
