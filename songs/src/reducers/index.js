import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "I am disco dancer",
      duration: "2:20"
    },
    {
      title: "Shape of you",
      duration: "3:00"
    },
    {
      title: "Moonlight walk",
      duration: "2:10"
    },
    {
      title: "This is it",
      duratin: "1:49"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
