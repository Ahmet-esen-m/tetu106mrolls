function textbox_underline(box) {
  document.getElementById(box.id).style.borderColor = "rgb( 64,255,159)"
}
function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(204,255,230)"
}
    
/* ITEMS */

function item1() {
  q1 = document.getElementById("item1_q1").value
  q2 = document.getElementById("item1_q2").value
  q3 = document.getElementById("item1_q3").value
  d = document.getElementById("item1_d").value

  q1 = q1*10**-7
  q2 = q2*10**-9
  q3 = q3*10**-10
  d = d*10**-3
  
  k = 9*10**9

  f1 = -1*k*q1*q2/d**2
  f2 = k*q2*q3/d**2

  F = f2 + f1
  F = F.toFixed(2)

  document.getElementById("item1_part_a").value = F + " N"
  document.getElementById("item1_part_a").name = F
}

function item3() {

  q1 = document.getElementById("item3_q1").value
  x1 = document.getElementById("item3_x1").value
  q2 = document.getElementById("item3_q2").value
  q3 = document.getElementById("item3_q3").value
  x3 = document.getElementById("item3_x3").value

  q1 = q1*0.1**9
  q2 = q2*0.1**9
  q3 = q3*0.1**9

  pi = Math.PI
  e = 8.854*0.1**12
  k = 1/(4*pi*e)

  d1 = x3 - x1
  d2 = -1*x3

  f1 = k*q1*q3/d1**2
  f2 = -1*k*q2*q3/d2**2

  F = f1 + f2
  F = Math.round(F*10**7)/10**7

  document.getElementById("item3_part_a").value = F
}

function item4() {
  c = document.getElementById("item4_c").value
  m = document.getElementById("item4_m").value
  
  c = c/10**6
  m = m/1000

  e = 1.602*0.1**19
  em = 9.109*0.1**31

  e_num = parseInt(c/e)
  m_ch = e_num*em

  prct = 100*m_ch/m
  prct = Math.round(prct*10**15)/10

  document.getElementById("item4_part_a").value = prct + "*10^-14"
}

function item5() {
  q = document.getElementById("item5_q").value
  a = document.getElementById("item5_a").value

  q = q/1000

  k = 9*10**9
  kok2 = Math.sqrt(2)

  f1 = kok2*k*q*q/a**2
  f2 = 0.5*k*q*q/a**2

  F = f1 - f2
  if (F >= 10**7) {
    F = (Math.round(F/10**5)/100).toFixed(2)
    document.getElementById("item5_part_a").value = F + "*10^7 ," + F + "*10^7 ," + F + "*10^7 ," + F + "*10^7"
  }
  else {
    F = (Math.round(F/10**4)/100).toFixed(2)
    document.getElementById("item5_part_a").value = F + "*10^6 ," + F + "*10^6 ," + F + "*10^6 ," + F + "*10^6"
  }
}

function item6() {
  q1 = document.getElementById("item6_q1").value
  q2 = document.getElementById("item6_q2").value
  d = document.getElementById("item6_d").value

  q1 = -1*q1/10**6
  q2 = q2/10**6
  d = d/100

  x = d*Math.sqrt(q1)/(Math.sqrt(q2) - Math.sqrt(q1))
  x = x*100
  x = x.toFixed(0)

  document.getElementById("item6_part_a").value = x
}

function item7() {
  pi = Math.PI
  q = document.getElementById("item7_q").value
  a = document.getElementById("item7_a").value

  q = q/10**6
  a = a/100

  k = 9*10**9

  q1_tht = Math.atan(0.5)
  q2_tht = Math.atan(1/3)

  EA1 = k*q/(5*a**2)
  EA = 2*EA1*Math.sin(q1_tht)

  EB1 = 0.5*k*q/a**2
  EB1X = EB1*Math.cos(pi/4)
  EB1Y = EB1*Math.sin(pi/4)

  EB2 = k*q/(10*a**2)
  EB2X = EB2*Math.cos(q2_tht)
  EB2Y = EB2*Math.sin(q2_tht)
  
  EBX = EB1X - EB2X
  EBY = EB1Y + EB2Y
  EB = Math.sqrt(EBX**2 + EBY**2)

  if (EA >= 10**7) {
    EA = Math.round(EA/10**6)*10**6
  }
  else {
    EA = Math.round(EA/10**5)*10**5
  }

  if (EB >= 10**7) {
    EB = Math.round(EB/10**6)*10**6
  }
  else {
    EB = Math.round(EB/10**5)*10**5
  }

  EB_tht = Math.atan(EBY/EBX)*180/pi
  EB_tht = EB_tht.toFixed(0)

  document.getElementById("item7_part_a").value = EA + " ," + EB
  document.getElementById("item7_part_b").value = "90" + " ," + EB_tht
}

function item8() {
  pi = Math.PI
  x = parseFloat(document.getElementById("item8_x").value)
  q = parseFloat(document.getElementById("item8_q").value)
  ym = parseFloat(document.getElementById("item8_ym").value)
  yp = parseFloat(document.getElementById("item8_yp").value)

  e = 8.85*0.1**12
  
  k = 1/(4*pi*e)

  q = q/10**6
  ym = Math.abs(ym)
  y = ym + yp
  lambda = q/y

  tht1 = Math.atan(yp/x)
  tht2 = -1*Math.atan(ym/x)

  EX = k*lambda*(Math.sin(tht1) - Math.sin(tht2))/x
  EY = k*lambda*(Math.cos(tht1) - Math.cos(tht2))/x

  E = 2*k*lambda/x

  rt1 = 100*(EX - E)/E
  rt2 = 100*EY/E
  
  EX = Math.round(EX/100)*100
  EY = EY.toFixed(0)

  if (rt1 <= -0.1 || rt1 >= 0.1) {
    rt1 = Math.round(rt1*100)/100
  }
  else {
    rt1 = Math.round(rt1*1000)/1000
  }

  if (rt2 <= -1 || rt2 >= 1) {
    rt2 = Math.round(rt2*10)/10
  }
  else {
    rt2 = Math.round(rt2*100)/100
  }

  document.getElementById("item8_part_a").value = EX + " ," + EY
  document.getElementById("item8_part_b").value = rt1 + " ," + rt2
}

function item9() {
  
  v0 = parseFloat(document.getElementById("item9_v0").value)
  ei = parseFloat(document.getElementById("item9_ei").value)
  ej = parseFloat(document.getElementById("item9_ej").value)
  t = parseFloat(document.getElementById("item9_t").value)
  
  v0 = v0*10**6

  t = t*0.1**9

  pi = Math.PI
  eps = 8.85*0.1**12
  k = 1/(4*pi*eps)

  m = 9.109*0.1**31
  e = -1*1.602*0.1**19

  ax = e*ei/m
  ay = e*ej/m

  vx = ax*t
  vy = v0 + ay*t
  tht = 90 + Math.atan(vy/vx)*180/pi

  ax = (Math.round(ax/10**14)/10).toFixed(1)
  ay = (Math.round(ay/10**15)/10).toFixed(1)

  tht = Math.round(tht/10)*10

  document.getElementById("item9_part_a").value = ax + "*10^15," + ay + "*10^16"
  document.getElementById("item9_part_b").value = tht
}

function item10() {
  
  v0 = parseFloat(document.getElementById("itema_v0").value)
  l = parseFloat(document.getElementById("itema_l").value)
  E = parseFloat(document.getElementById("itema_E").value)

  l = l/100

  pi = Math.PI
  eps = 8.85*0.1**12
  k = 1/(4*pi*eps)

  m = 9.109*0.1**31
  e = 1.602*0.1**19

  tht = Math.atan(e*E*l/(m*v0**2))

  tht = tht.toFixed(2)

  document.getElementById("itema_part_a").value = tht + " rad"
  document.getElementById("itema_part_a").name = tht
}

function item11() {
  
  dm = parseFloat(document.getElementById("itemb_dm").value)
  d = parseFloat(document.getElementById("itemb_d").value)
  E = parseFloat(document.getElementById("itemb_E").value)
  tht = parseFloat(document.getElementById("itemb_tht").value)

  E = E/10000

  pi = Math.PI
  eps = 8.85*0.1**12
  k = 1/(4*pi*eps)

  m = 9.109*0.1**31
  e = 1.602*0.1**19

  q = dm*d

  T = q*E*d
  if (T >= 10) {
    T = T/10
    T = T.toFixed(1)
    document.getElementById("itemb_part_c").value = T + "*10^-25 N*m"
    document.getElementById("itemb_part_c").name = T + "*10^-25"
  }
  else {
    T = T.toFixed(1)
    document.getElementById("itemb_part_c").value = T + "*10^-26 N*m"
    document.getElementById("itemb_part_c").name = T + "*10^-26"
  }

  W = dm*E*(1 - Math.cos(tht*pi/180))
  W = W.toFixed(1)

  document.getElementById("itemb_part_a").value = q + "*10^-20 C"
  document.getElementById("itemb_part_a").name = q + "*10^-20"

  document.getElementById("itemb_part_d").value = W + "*10^-26 J"
  document.getElementById("itemb_part_d").name = W + "*10^-26"
}

function item12() {
  
  q1 = parseFloat(document.getElementById("itemc_q1").value)
  q2 = parseFloat(document.getElementById("itemc_q2").value)
  x = parseFloat(document.getElementById("itemc_x").value)

  q2 = -1*q2

  d = Math.sqrt(q2)*x/(Math.sqrt(q1) - Math.sqrt(q2))
  d = d.toFixed(1)

  document.getElementById("itemc_part_a").value = d
}

function item13() {
  
  m = parseFloat(document.getElementById("itemd_m").value)
  E = parseFloat(document.getElementById("itemd_E").value)

  m = m/1000

  tht = Math.acos(43/55)
  q = Math.tan(tht)*m*9.8/E

  q = Math.round(q*10**8)/10

  document.getElementById("itemd_part_a").value = q + "*10^-7"
}

function item14() {
  
  m = parseFloat(document.getElementById("iteme_m").value)
  q = parseFloat(document.getElementById("iteme_q").value)
  T = parseFloat(document.getElementById("iteme_T").value)

  q = q*0.1**6

  eps = 8.85*0.1**12

  E = (T - m*9.8)/q

  sigma = 2*eps*E

  E = Math.round(E/10000)*10000
  sigma = Math.round(sigma*10**6)/100

  document.getElementById("iteme_part_b").value = E + " N/C"
  document.getElementById("iteme_part_b").name = E
  document.getElementById("iteme_part_c").value = sigma + "*10^-4 C/m^2"
  document.getElementById("iteme_part_c").name = sigma + " *10^-4"
}

function item16() {
  
  m = parseFloat(document.getElementById("itemg_m").value)
  E = parseFloat(document.getElementById("itemg_E").value)

  m = m/1000

  q = m*9.8/E

  mp = 1.67*0.1**27
  e = 1.6*0.1**19

  EB = mp*9.8/e

  q = -1*Math.round(q*10**7)/100
  EB = Math.round(EB*10**9)/100

  document.getElementById("itemg_part_a").value = q + "*10^-5"
  document.getElementById("itemg_part_b").value = EB + "*10^-7"
}
