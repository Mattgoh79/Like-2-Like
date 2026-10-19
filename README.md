# Like2Like
Website using Spotify API to look at you and your friend's common Liked Songs

**Ver 0.1**

Functionality: Only works if both users log in using the same tab on the same device

Deployment: LocalHost

How to run:

1. Clone this repo
2. Create a Spotify Developer Account (I wanna save my API quota so use your own thanks)
3. Go to Dashboard after clicking on your profile picture on the top right
4. Create App
5. Enter Details: 
      Name: {anything}
      Description: {anything}
      Redirect URIs: http://127.0.0.1:5173/callback
      Tick Web API
      Save
6. Go into the newly created app in the dashboard
7. Copy the client Id
8. In the project folder, create a file called .env
9. Type in
      VITE_CLIENT_ID = "insert client ID in here, dont type this. replace this paragraph with the client id"
10. In the project folder, type in "npm i" into the terminal
11. then type npm run dev.
12. In your browser, open http://127.0.0.1:5173

