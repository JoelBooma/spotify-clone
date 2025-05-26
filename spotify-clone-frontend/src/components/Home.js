import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import { fetchSongs, fetchPlaylists, fetchUser } from "../api";

const Home = () => {
  const { token, username, logoutUser } = useContext(AuthContext);
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const userData = await fetchUser(username, token);
      const songData = await fetchSongs(token);
      const playlistData = await fetchPlaylists(token);
      setUser(userData);
      setSongs(songData);
      setPlaylists(playlistData);
    };
    loadData();
  }, [token, username]);

  return (
    <div className="home-container">
      <h1>Welcome, {user?.username}!</h1>
      <button onClick={logoutUser}>Logout</button>

      <h2>Songs</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.title} - {song.artist}</li>
        ))}
      </ul>

      <h2>Playlists</h2>
      <ul>
        {playlists.map((pl) => (
          <li key={pl.id}>{pl.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

