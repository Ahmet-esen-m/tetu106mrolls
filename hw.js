function copy_default(btn) {
  var text_id = btn.name.substr(13, 6)
  document.getElementById(text_id).value = "Copy"
  document.getElementById(text_id).style.width = "35px"
}
function copy(btn){
  var text_id = btn.name.substr(0, 12)
  var text = document.getElementById(text_id)
  text.select()
  navigator.clipboard.writeText(text.value)
}
function copy_name(btn){
  var text_id = btn.name.substr(0, 12)
  var text = document.getElementById(text_id)
  text.select()
  navigator.clipboard.writeText(text.name)
}
function copied(btn) {
  var text_id = btn.name.substr(13, 6)
  document.getElementById(text_id).value = "Copied"
  document.getElementById(text_id).style.width = "45px"
}
function copy_directly(btn) {
  navigator.clipboard.writeText(btn.value)
}