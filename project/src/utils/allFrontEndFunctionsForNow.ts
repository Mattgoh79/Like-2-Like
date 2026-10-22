import { redirectToAuthCodeFlow } from "../script";

const clientId = import.meta.env.VITE_CLIENT_ID || '';

const getItem = (key: string) => sessionStorage.getItem(key);
    
const addNextUser = () => {
    let x =1;
    while (getItem("spotifyTracks" + x) !== null) {
        console.log(x);
        x++;
    }

    console.log(x)
    redirectToAuthCodeFlow(clientId, "spotifyTracks" + x) //I LOVE JAVASCRIPT!!!
}

const clearMatches = () => {
    if(getItem("matches") != null) {
        sessionStorage.removeItem("matches");
        location.reload();
    }
    else{
        alert("WHAT ARE YOU CLEARING BRO LOCK IN!!!!")
    }
}


//ok this function was written by ai im too dumb for this
const compareLibraries = () => {

    if(getItem("matches") != null) {
        console.log("AudioMatch complete STOP WASTING COMPUTER RESOURCES")
    }
    else if(getItem("spotifyTracks2") != null){
        let x = 1;

        // Get the first user's tracks.
        let matches = JSON.parse(
            getItem(`spotifyTracks${x}`) ?? "[]"
        );

        if (matches.length === 0) {
            console.log("No tracks found for the first user.");
            return [];
        }

        x++;

        // Compare against each subsequent user's library.
        while (getItem(`spotifyTracks${x}`) !== null) {
            const tracks = JSON.parse(
                getItem(`spotifyTracks${x}`) ?? "[]"
            );

            const trackIds = new Set(
                tracks.map((item: { track?: { id?: string } }) => item.track?.id)
            );

            matches = matches.filter(
                (item: { track?: { id?: string } }) =>
                    item.track?.id && trackIds.has(item.track.id)
            );

            x++;
        }

        sessionStorage.setItem("matches", JSON.stringify(matches));

        console.log("Matching tracks:", matches);

        location.reload();

        return matches;
    }
    else{
        alert("Bro wants to find inner peace by not comparing himself to others   😂😂😂😂")
    }
};


export {
    addNextUser,
    clearMatches,
    compareLibraries
};

