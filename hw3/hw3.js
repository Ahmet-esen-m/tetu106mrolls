function textbox_underline(box) {
  document.getElementById(box.id).style.borderColor = "rgb( 54,217,217)"
}
function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(194,242,242)"
}

/* ITEMS */

function item1() {
  V = parseFloat(document.getElementById("item1_V").value)

  e = 1.602*0.1**19
  e_m = 9.109*0.1**31

  v = Math.sqrt(2*e*V/e_m)
  //v = Math.round(v/10**5)/100
  v = Math.round(v/10**4)
  if (v < 1000) {
    v = v/100
    document.getElementById("item1_part_a").value = v + "*10^6"
  }
  else {
    v = (v/1000).toFixed(2)
    document.getElementById("item1_part_a").value = v + "*10^7"
  }
  
}

function item3() {
  q1 = parseFloat(document.getElementById("item3_q1").value)
  q2 = parseFloat(document.getElementById("item3_q2").value)
  d = parseFloat(document.getElementById("item3_d").value)
  x = parseFloat(document.getElementById("item3_x").value)

  q1 = q1*0.1**9
  q2 = q2*0.1**9
  d = d/100
  x = x/100

  k = 8.99*10**9
  e = 1.602*0.1**19
  e_m = 9.109*0.1**31

  V1 = 2*k*(q1 + q2)/d
  V2 = k*((d - x)*q1 + x*q2)/(x*(d - x))

  v = Math.sqrt(2*e*(V2 - V1)/e_m)
  v = Math.round(v/10**4)

  if (v > 1000) {
    v = (v/1000).toFixed(2)
    document.getElementById("item3_part_a").value = v + "*10^7"
  }
  else {
    v = (v/100).toFixed(2)
    document.getElementById("item3_part_a").value = v + "*10^6"
  }

}

function item5() {
  q = parseFloat(document.getElementById("item5_q").value)
  d = parseFloat(document.getElementById("item5_d").value)
  qt = parseFloat(document.getElementById("item5_qt").value)
  x = parseFloat(document.getElementById("item5_x").value)

  q = q*0.1**6
  d = d/100
  qt = qt*0.1**6
  x = x/100

  k = 8.99*10**9

  V1 = 4*k*q/d
  V2 = k*q*d/(0.25*d**2 - x**2)

  W = qt*(V2 - V1)
  W = W.toFixed(2)

  document.getElementById("item5_part_a").value = W
}

function item7() {
  R = parseFloat(document.getElementById("item7_R").value)
  Q = parseFloat(document.getElementById("item7_Q").value)
  m = parseFloat(document.getElementById("item7_m").value)
  q = parseFloat(document.getElementById("item7_q").value)
  d = parseFloat(document.getElementById("item7_d").value)

  R = R/100
  Q = Q*0.1**6
  m = m/1000
  q = q*0.1**6

  k = 8.99*10**9

  V1 = k*Q/R
  V2 = k*Q/(d**2 + R**2)**0.5

  v = Math.sqrt(2*q*(V1 - V2)/m)
  v = v.toFixed(0)

  document.getElementById("item7_part_a").value = v
}

function item9() {
  dm = parseFloat(document.getElementById("item9_dm").value)
  d = parseFloat(document.getElementById("item9_d").value)

  dm = dm*0.1**30
  d = d*0.1**9

  pi = Math.PI
  cos = Math.cos(pi/4)

  k = 8.99*10**9

  V = k*dm/d**2
  V2 = k*dm*cos/d**2
  V3 = -1*k*dm*cos/d**2

  V = Math.round(V*10**4)/10
  V2 = Math.round(V2*10**4)/10
  V3 = Math.round(V3*10**4)/10

  document.getElementById("item9_part_a").value = V + "*10^-3"
  document.getElementById("item9_part_b").value = V2 + "*10^-3"
  document.getElementById("item9_part_c").value = V3 + "*10^-3"
}

function item10() {
  m = parseFloat(document.getElementById("itema_m").value)
  q = parseFloat(document.getElementById("itema_q").value)
  vi = parseFloat(document.getElementById("itema_vi").value)
  vj = parseFloat(document.getElementById("itema_vj").value)
  x = parseFloat(document.getElementById("itema_x").value)

  m = m/1000
  q = q*0.1**6

  a = -1*q*(2*vi*x + 3*vj*x**2)/m
  if (a > 1) {
    a = a.toFixed(1)
  }
  else {
    a = a.toFixed(2)
  }

  document.getElementById("itema_part_a").value = a
}

function item12() {
  q = parseFloat(document.getElementById("itemc_q").value)
  r = parseFloat(document.getElementById("itemc_r").value)

  q = q*0.1**8
  r = r/100

  k = 8.99*10**9

  V = k*q/r
  V = Math.round(V/10)*10
  if (V > 1000) {
    V = Math.round(V/100)*100
  }
  else {
    V = Math.round(V/10)*10
  }

  document.getElementById("itemc_part_a").value = V
}

function item13() {
  E = parseFloat(document.getElementById("itemd_E").value)
  m = parseFloat(document.getElementById("itemd_m").value)
  h = parseFloat(document.getElementById("itemd_h").value)
  q = parseFloat(document.getElementById("itemd_q").value)

  q = q*0.1**6
  q1 = q
  q2 = -1*q

  v1 = Math.sqrt(2*h*(9.8 + q1*E/m))
  v2 = Math.sqrt(2*h*(9.8 + q2*E/m))

  v = v1 - v2

  if (v < 0.1) {
    v = v.toFixed(4)
  }
  else {
    v = v.toFixed(3)
  }

  document.getElementById("itemd_part_a").value = v
}

function item14() {
  q = parseFloat(document.getElementById("iteme_q").value)
  e = parseFloat(document.getElementById("iteme_e").value)

  e = e*10**6

  C = 4184
  Lv = 2260000
  Tr = 20

  DV = e/q

  m = e/(C*(100-Tr) + Lv)

  DV = Math.round(DV/10**4)

  if (DV > 100) {
    DV = (DV/100).toFixed(1)
    document.getElementById("iteme_part_a").value = DV + "*10^6 V"
    document.getElementById("iteme_part_a").name = DV + "*10^6"
  }
  else {
    DV = DV/10
    document.getElementById("iteme_part_a").value = DV + "*10^5 V"
    document.getElementById("iteme_part_a").name = DV + "*10^5"
  }

  if (m < 1) {
    m = m.toFixed(2)
  }
  else {
    m = m.toFixed(1)
  }

  document.getElementById("iteme_part_b").value = m + " kg"
  document.getElementById("iteme_part_b").name = m
}