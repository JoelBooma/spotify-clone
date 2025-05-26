const API_URL = "http://localhost:8080/api";

export const login = async (username, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return res.json();
};

export const fetchSongs = async (token) => {
  const res = await fetch(`${API_URL}/songs`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const fetchPlaylists = async (token) => {
  const res = await fetch(`${API_URL}/playlists`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const fetchUser = async (username, token) => {
  const res = await fetch(`${API_URL}/users/${username}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
