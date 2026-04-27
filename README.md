# 🎵 Sasta Spotify — Spotify Clone

A full-featured Spotify-inspired music player built with **React**, **Redux Toolkit**, **Tailwind CSS**, and **React Router**. This project replicates core Spotify features including authentication, music playback, search, and favourite songs management.

---

## 🚀 Live Demo

### [🎵 Click Here to Open — Sasta Spotify](https://spotify-clone-bekw.vercel.app/)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Library |
| Redux Toolkit | Global State Management |
| React Router v6 | Client-side Routing |
| Tailwind CSS | Styling |
| React Hook Form | Form Handling & Validation |
| LocalStorage | Data Persistence |

---

## 📁 Folder Structure

```
sasta-spotify/
├── README.md                   ← You are here
├── package.json
├── index.html
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    │
    ├── app/
    │   ├── config/             → Axios instance
    │   ├── layouts/            → Auth & Dashboard layouts
    │   ├── routes/             → App routes, Protected & Public routes
    │   └── store/              → Redux store configuration
    │
    └── features/
        ├── auth/
        │   ├── hooks/          → useAuth (all auth logic)
        │   ├── state/          → authSlice (Redux)
        │   └── ui/pages/       → LoginPage, RegisterPage
        │
        ├── dashboard/
        │   ├── api/            → songsAPI (songs data)
        │   ├── hooks/          → useDashboard
        │   ├── state/          → searchSlice, favSongSlice
        │   └── ui/             → Navbar, SongCard, HomePage, FavouriteSongsPage
        │
        ├── player/
        │   ├── hooks/          → usePlayer (audio logic)
        │   ├── state/          → playerSlice (Redux)
        │   └── ui/             → Player (bottom bar)
        │
        └── search/
            └── ui/             → SearchInput component
```

---

## ✨ Features

### 🔐 Auth System
- User **Registration** with name, email and password
- User **Login** with email and password validation
- **Form Validation** using React Hook Form — required fields, min/max length
- **Error Handling** — shows error message on invalid credentials
- **Persistent Login** — user stays logged in using LocalStorage
- **Logout** functionality from Navbar
- **Protected Routes** — dashboard only accessible after login
- **Public Routes** — login/register redirect to dashboard if already logged in

### 🎵 Music Player
- **Play / Pause** — toggle playback with button
- **Next / Previous** — navigate between songs in current playlist
- **Progress Bar** — real-time song progress with seek functionality
- **Song Duration** — displays current time and total duration
- **Autoplay** — automatically plays next song when current song ends
- **Repeat** — repeats current song on loop
- **Now Playing** — shows current song thumbnail, title and artist in player bar

### 🔍 Search System
- **Real-time Search** — filters songs instantly as you type
- **All Songs Search** — searches across entire song library on home page
- **Favourite Songs Search** — searches only within favourite songs on favourites page
- **Search Reset** — clears search automatically when navigating between pages

### ❤️ Favourite Songs
- **Add to Favourites** — heart icon on each song card
- **Remove from Favourites** — click heart again to remove
- **Persistent Favourites** — saved in LocalStorage, persists on page reload
- **Favourites Page** — dedicated page showing all favourite songs
- **Separate Playlist** — next/prev only navigates within favourites playlist when on favourites page

### 🎨 UI/UX
- Spotify-inspired **dark theme** throughout
- **Responsive design** with Tailwind CSS
- **Active sidebar** highlighting based on current route
- **Animated song cards** with hover effects
- **Bottom fixed player** — always visible while browsing
- **Green heart icon** for favourited songs

---

## 🔧 State Management (Redux)

### `authSlice`
| State | Description |
|---|---|
| `loginUser` | Currently logged in user object |
| `registerUser` | Array of all registered users |
| `invalidEmailOrPassword` | Login error boolean flag |
| `loginData` | Stores last entered login credentials |

### `playerSlice`
| State | Description |
|---|---|
| `currentPlayingSong` | Currently playing song object |
| `isPlaying` | Play/pause boolean status |
| `songs` | Current active playlist array |
| `currentIndex` | Index of current song in playlist |
| `autoPlay` | Autoplay on/off boolean |
| `autoRepeat` | Repeat on/off boolean |
| `currentTime` | Current playback time in seconds |
| `totalDuration` | Total song duration in seconds |

### `searchSlice`
| State | Description |
|---|---|
| `songs` | All songs list |
| `searchValue` | Current search input value |
| `searchedSongs` | Filtered songs from all songs |
| `favSearchedSongs` | Filtered songs from favourites only |

### `favSongSlice`
| State | Description |
|---|---|
| `favSongs` | Array of all favourite songs |

---

## 🏗️ Architecture

This project follows a **Feature-based Architecture** with **4 layers**:

```
UI Layer     → Components & Pages  (pure UI, no logic)
Hook Layer   → Business Logic      (useAuth, usePlayer, useDashboard)
State Layer  → Redux Slices        (global state management)
API Layer    → Data & Services     (songs data, axios)
```

### Key Design Decisions
- **`usePlayer`** called only in `Player.jsx` to avoid multiple Audio instances and re-render bugs
- **`SongCard`** uses `useDispatch` directly instead of `usePlayer` to prevent 120 hook instances
- **`localStorage`** used for auth persistence and favourite songs across sessions
- **`isFavourite`** derived from `favSongs` array using `.some()` — not stored separately in Redux
- **`currentTime` and `totalDuration`** stored in Redux so progress bar works across page navigation

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/rajat6822/Spotify-clone.git

# 2. Navigate into the project
cd sasta-spotify

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in browser
http://localhost:5173
```

---

## 📝 How to Use

```
1. Register  → Create an account with name, email and password
2. Login     → Login with your registered credentials
3. Browse    → Scroll through all songs on the home page
4. Play      → Click any song card to start playing
5. Control   → Use player controls at the bottom bar
6. Favourite → Click the heart icon on any song card to add to favourites
7. Search    → Type in the search bar to filter songs
8. Navigate  → Use sidebar to switch between All Songs and Liked Songs
9. Logout    → Click logout button in the navbar
```

---

## 🙌 Author

**Rajat** — [@rajat6822](https://github.com/rajat6822)

---

## 📄 License

This project is for educational purposes only.  
Spotify name and logo are trademarks of Spotify AB.