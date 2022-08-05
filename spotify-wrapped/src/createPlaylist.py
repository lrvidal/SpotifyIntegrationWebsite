import pip._vendor.requests

SPOTIFY_CREATE_PLAYLIST_URL= 'https://api.spotify.com/v1/users/lou0505/playlists'
ACCESS_TOKEN = 'BQA_WPnshAK80PB0_3XFDOVqcYtvJo2WAPAiAQWQYBcO97o1jHuDp2FYLUlhQKFTeob31r4tsNI-h1Ycukyg8yJj__8iwHuBDuwsRQI_YXWZmTB4VD9F-O0R2Ek6dWPUssHSq1xn8xRvb5AYYgeTxSf8ZOL0jk-GcoQsI7KQFO0HVo-z_is'

def create_playlist(name, public):
    response = requests.post(
        SPOTIFY_CREATE_PLAYLIST_URL,
        headers = {
            "Authorization": f"Bearer {ACCESS_TOKEN}"
        },
        json={
            "name":name,
            "public": public
        }
    )
    json_resp = response.json()
    return json_resp


def main():
    playlist = create_playlist(
        name = "My Private Playlist",
        public= False
    )
    print(f"Playlist: {playlist}")

if __name__ == '__main__':
    main()
