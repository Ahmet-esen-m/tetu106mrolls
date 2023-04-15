function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(194,218,242)"
}
function textbox_underline(box) {
  document.getElementById(box.id).style.borderColor = "rgb( 54,135,217)"
}

/* ITEMS */

function item1() {
  R1 = parseFloat(document.getElementById("item1_R1").value)
  R2 = parseFloat(document.getElementById("item1_R2").value)

  T = 4

  a = -5*0.1**4

  T2 = (((R2/R1)-1)/a) + T

  if (T2 < 10) {
    T2 = T2.toFixed(2)
  }
  else if (T2 > 100) {
    T2 = Math.round(T2/10)*10
  }
  else {
    T2 = T2.toFixed(1)
  }

  document.getElementById("item1_part_a").value = T2
}

function item2() {
  I = parseFloat(document.getElementById("item2_I").value)
  R = parseFloat(document.getElementById("item2_R").value)
  d = parseFloat(document.getElementById("item2_d").value)

  R = R*0.1**5
  d = d*0.1**2

  V = I*R*d

  if (V < 0.001) {
    ex = 4
  }
  else if (V > 0.01) {
    ex = 2
  }
  else {
    ex = 3
  }

  V = (V*10**ex).toFixed(1)
  document.getElementById("item2_part_a").value = V + "*10^-" + ex + " V"
  document.getElementById("item2_part_a").name = V + "*10^-" + ex
}

function item3() {
  l = parseFloat(document.getElementById("item3_l").value)
  I = parseFloat(document.getElementById("item3_I").value)

  D = 1.628*0.1**3
  ro = 1.68*0.1**8
  pi = Math.PI

  A = pi*(D/2)**2
  V = I*ro*l/A

  if (V < 1) {
    V = V.toFixed(2)
  }
  else if (V > 10) {
    V = V.toFixed(0)
  }
  else {
    V = V.toFixed(1)
  }

  document.getElementById("item3_part_a").value = V
}

function item4() {
  R = parseFloat(document.getElementById("item4_R").value)

  R = R*10**3

  aN = 4*0.1**4
  aC = 5*0.1**4

  Rc = R*aN/(aN + aC)
  Rn = R - Rc

  if (Rc < 1000) {
    Rc = Rc.toFixed(0)
    Rn = Math.round(Rn/10)*10
  }
  else if (Rn < 1000) {
    Rn = Rn.toFixed(0)
    Rc = Math.round(Rc/10)*10
  }
  else {
    Rc = Math.round(Rc/10)*10
    Rn = Math.round(Rn/10)*10
  }

  document.getElementById("item4_part_a").value = Rc
  document.getElementById("item4_part_b").value = Rn
}

function item5() {
  r1 = parseFloat(document.getElementById("item5_r1").value)
  r2 = parseFloat(document.getElementById("item5_r2").value)
  l = parseFloat(document.getElementById("item5_l").value)

  r1 = r1*0.1**3
  r2 = r2*0.1**3
  l = l*0.1**2

  rho = 15*0.1**5
  pi = Math.PI

  R1 = rho*Math.log(r2/r1)/(2*pi*l)

  R2 = rho*l/(pi*(r2**2 - r1**2))

  if (R1 < 0.0001) {
    ex = 5
  }
  else if (R1 > 0.001) {
    ex = 3
  }
  else {
    ex = 4
  }
  R1 = (R1*10**ex).toFixed(1)

  if (R2 > 1) {
    R2 = R2.toFixed(1)
  }
  else if (R2 > 0.1) {
    R2 = R2.toFixed(2)
  }
  document.getElementById("item5_part_c").value = R2

  if (R2 < 0.1) {
    R2 = (R2*100).toFixed(1)
    document.getElementById("item5_part_c").value = R2 + "*10^-2"
  }

  document.getElementById("item5_part_b").value = R1 + "*10^-" + ex
  
}

function item7() {
  l = parseFloat(document.getElementById("item7_l").value)
  I = parseFloat(document.getElementById("item7_I").value)

  l = l*2

  d = 0.129*0.1**2
  V = 120
  rho = 1.68*0.1**8
  pi = Math.PI

  R = 4*rho*l/(pi*d**2)
  P = R*I**2

  if (P < 10) {
    P = P.toFixed(1)
  }
  else {
    P = P.toFixed(0)
  }

  document.getElementById("item7_part_a").value = P
}

function item9() {
  Nhe = parseFloat(document.getElementById("item9_Nhe").value)
  Vhe = parseFloat(document.getElementById("item9_Vhe").value)
  No = parseFloat(document.getElementById("item9_No").value)
  Vo = parseFloat(document.getElementById("item9_Vo").value)

  Nhe = Nhe*10**12
  Vhe = Vhe*10**6
  No = No*10**11
  Vo = Vo*10**6

  e = 1.6*0.1**19

  i = Nhe*2*e*Vhe + No*e*Vo

  if (i < 1) {
    i = i.toFixed(2)
  }
  else if (i > 10) {
    i = i.toFixed(0)
  }
  else {
    i = i.toFixed(1)
  }

  document.getElementById("item9_part_a").value = i + " A/m^2"
  document.getElementById("item9_part_a").name = i
}

function item10() {
  E = parseFloat(document.getElementById("itema_E").value)
  P = parseFloat(document.getElementById("itema_P").value)
  
  V = 120
  E = E*0.1**2

  P0 = P/E
  I = P0/V

  if (P0 < 1000) {
    P0 = Math.round(P0/10)*10
  }
  else {
    P0 = Math.round(P0/100)*100
  }

  if (I < 10) {
    I = I.toFixed(1)
  }
  else {
    I = I.toFixed(0)
  }

  document.getElementById("itema_part_a").value = P0
  document.getElementById("itema_part_b").value = I
}

function item11() {
  P = parseFloat(document.getElementById("itemb_P").value)
  t1 = parseFloat(document.getElementById("itemb_t1").value)
  t2 = parseFloat(document.getElementById("itemb_t2").value)

  Va = 120
  Pa = P
  Vb = 12
  Pb = P

  t1 = t1*3600
  t2 = t2*3600

  Ia = Pa/Va
  Ib = Pb/Vb

  Ra = Va/Ia
  Rb = Vb/Ib

  Qa = Ia*t1
  Qb = Ib*t1

  Ea = Pa*t2
  Eb = Pb*t2

  if (Ia < 1) {
    Ia = Ia.toFixed(2)
  }
  else {
    Ia = Ia.toFixed(1)
  }

  if (Ib < 10) {
    Ib = Ib.toFixed(1)
  }
  else {
    Ib = Ib.toFixed(0)
  }

  if (Ra > 100) {
    Ra = Math.round(Ra/10)*10
  }
  else {
    Ra = Ra.toFixed(0)
  }

  if (Rb > 1) {
    Rb = Rb.toFixed(1)
  }
  else {
    Rb = Rb.toFixed(2)
  }

  if (Qa < 10**4) {
    Qa = Math.round(Qa/100)*100
  }
  else {
    Qa = Math.round(Qa/1000)*1000
  }

  if (Qb < 10**5) {
    Qb = Math.round(Qb/1000)*1000
  }
  else {
    Qb = Math.round(Qb/10000)*10000
  }
  
  if (Ea > 10**6) {
    exa = 5
  }
  else {
    exa = 4
  }

  mexa = exa + 1
  Ea = Math.round(Ea/10**exa)/10

  if (Eb > 10**6) {
    exb = 5
  }
  else {
    exb = 4
  }

  mexb = exb + 1
  Eb = Math.round(Eb/10**exb)/10

  document.getElementById("itemb_part_a").value = Ia + ", " + Ib
  document.getElementById("itemb_part_b").value = Ra + ", " + Rb
  document.getElementById("itemb_part_c").value = Qa + ", " + Qb
  document.getElementById("itemb_part_d").value = Ea + "*10^" + mexa + ", " + Eb + "*10^" + mexb
  document.getElementById("itemb_part_d").name = Ea + "*10@Sup{" + mexa + "}, " + Eb + "*10@Sup{" + mexb + "}"
}