import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read"
];
const responseType = "token";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

const LOGIN_URL = spotifyApi.createAuthorizeURL(
    scopes,
    responseType
);

export default spotifyApi;

export { LOGIN_URL };
