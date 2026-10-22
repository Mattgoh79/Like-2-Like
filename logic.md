1. As of now, script.tsx will be my backend?
2. pass information from script to the components and hopefully they render
3. So all i need to pass to the component is the items, nothing else



HOW THE APP WILL WORK BASICALLY
1. take all the songs from your library
2. take all the songs from your friend's library
(this might take a min so have some nice loading screen where it takes album covers and spins them in a circle or smth)
3. LINEAR SEARCH EACH SONG? sounds inefficient.
	- whoever has the least total liked songs will be the one we take the songs from and 
		compare it with the other library
4. Put all the songs that are in both librarys in a new array
5. render new array on screen



IDEAS TO CONNECT LIBRARYS
1. one phone. 
	- first user log in
	- cache their songs
	- second user log in
	- cache their songs
	- using the data in the cache, you search and compare them
	- push new array with the songs in common
	- display
	
2. two phones.
	- a lot more work for me  T-T
	- first guy presses start lobby button
	- they log in 
	- their library is saved like the render database
	- using a link?? or smth the next guy comes and logs in
	- saves their data in the server
	- using their data in the server compare and search
	- push new array with the songs in common
	- display
	
my capabilites rn i would be happy if i get the first one working.
second would be ideal but see how lah


TO PREVENT SAME USER SIGN IN 

1. They go to getLibrary
2. Since its the first time, they go else if statement with no code
3. They log into spotify
4. Like2Like opens again
5. getLibrary runs again because of script.tsx being rerendered
6. the first if will run 
7. fetches profile
8. sets sessionStorage accounts as that profile.
9. nextUser button press
10. sign in
11. getLibrary runs again
12. goes the second if since spotifyTracks exists
13. fetch profile
14. compares profile to all the saved accounts
15. if match, end there
16. if no match
17. then it will fetch all the tracks and save it

this way can save api quota by not rerunning fetchTracks on already fetched Tracks



Tackling dynamic tracks

1. trackList already takes slot. therefore, dynamic

2. userCard takes slot, therefore dynamic

NEED TO CHANGE APP.TSX AND SCRIPT.TSX AND allFrontendFunctions

3. script.tsx uses slot alr so should be ok

4. changed addNextUser to be dynamic instead of using spotifyTracks2

5. now need to change compare


