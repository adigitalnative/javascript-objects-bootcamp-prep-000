var playlist = {
  fooname: 'foo song',
  footwoname: 'footwosong'
}

function updatePlaylist(playlist, name, title) {
  playlist = Object.assign(playlist, {name: title })
}