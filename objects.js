const playlist = new Object();

function updatePlaylist(playlist, name, title) {
  playlist = Object.assign(playlist, {[name]: title})
  return playlist
}