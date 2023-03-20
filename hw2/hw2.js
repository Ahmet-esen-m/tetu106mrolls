function textbox_underline(box) {
  document.getElementById(box.id).style.borderColor = "rgb(64,255,255)"
}
function textbox_default(box) {
  document.getElementById(box.id).style.borderColor = "rgb(204,255,255)"
}

/* ITEMS */

function item5() {
  E0 = parseFloat(document.getElementById("item5_E0").value)
  E25 = parseFloat(document.getElementById("item5_E25").value)

  A = 25**2
  eps = 8.85*0.1**12

  Q = eps*A*(E25 - E0)
  Q = Q*10**7
  Q = Q.toFixed(1)

  document.getElementById("item5_part_a").value = Q + "*10^-7"
}

function item6() {
  Q = parseFloat(document.getElementById("item6_Q").value)
  q = parseFloat(document.getElementById("item6_q").value)

  sum = Q + q

  document.getElementById("item6_part_a").value = (Q*-1).toFixed(2)
  document.getElementById("item6_part_b").value = (sum).toFixed(2)
}

function item10() {
  E = parseFloat(document.getElementById("itema_E").value)
  d = parseFloat(document.getElementById("itema_d").value)

  r = d/200
  
  pi = Math.PI
  eps = 8.85*0.1**12

  Q = 4*pi*eps*E*r**2
  Q = Math.round(Q*10**9)

  document.getElementById("itema_part_a").value = Q + "*10^-9 C"
  document.getElementById("itema_part_a").name = Q + "*10^-9"
}