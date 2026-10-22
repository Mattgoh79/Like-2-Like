import { useEffect, useState } from "react";
import styles from './app.module.scss';
import { LoadingCard } from "./components/atoms/LoadingCard";
import { NextUserButton } from "./components/atoms/nextUserButton";
import { UserCard } from "./components/molecules/userCard";
import { getLibrary } from "./script";
import { addNextUser, clearMatches, compareLibraries } from "./utils/allFrontEndFunctionsForNow";


const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => { //runs every refresh ttho so its bada
        const loadLibrary = async () => {
            try {
                const result = await getLibrary();
                //it should call getLIbrary, there should be another function 
                if (result === "loaded") {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Failed to load Spotify library:", error);
            } 
                };
        loadLibrary();
    }, []);

    if (loading) {
        return <LoadingCard></LoadingCard>;
    }

    else if (!loading){
    return ( 
        <section id="profile">
            <div className={styles.actionsBar}>
                <NextUserButton onClick={addNextUser} children="Add Next User"></NextUserButton>
                <NextUserButton onClick={compareLibraries} children="Compare All Users"></NextUserButton>
                <NextUserButton onClick={clearMatches} children="Clear Matches"></NextUserButton>
            </div>
            <div className={styles.div}>
                <UserCard arrayNumber={0} slot={"spotifyTracks1"}></UserCard>
                <UserCard arrayNumber={1} slot={"spotifyTracks2"}></UserCard> 
                <UserCard arrayNumber={2} slot={"spotifyTracks3"}></UserCard> 
                <UserCard arrayNumber={3} slot={"spotifyTracks4"}></UserCard> 
                <UserCard arrayNumber={4} slot={"spotifyTracks5"}></UserCard> 
                <UserCard arrayNumber={5} slot={"spotifyTracks6"}></UserCard> 
                <UserCard arrayNumber={6} slot={"spotifyTracks7"}></UserCard> 
                <UserCard arrayNumber={7} slot={"spotifyTracks8"}></UserCard> 
                {/* is that bad to just have 10 userCards here */}
                <UserCard arrayNumber={10000} name="Common Liked Songs" slot={"matches"}></UserCard>
            </div>
        </section>
    );
}
};

export default App;
