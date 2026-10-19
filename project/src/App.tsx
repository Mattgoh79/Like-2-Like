import { NextUserButton } from "./components/atoms/nextUserButton";
import { TrackList } from "./components/atoms/trackList/TrackList";
import { NameCard } from "./components/atoms/nameCard";
import { addNextUser, compareLibraries } from "./utils/allFrontEndFunctionsForNow";
import styles from './app.module.scss';
import { UserCard } from "./components/molecules/userCard";

const App = () => {
    const renderError = (error: Error) => {
        return (
            <div>
                <h1>Something went wrong</h1>
                <p>{error.message}</p>
            </div>
        );
    };

    
    return (
        <section id="profile">
            <NextUserButton onClick={addNextUser} children="Add Next User"></NextUserButton>
            <NextUserButton onClick={compareLibraries} children="Compare Both User's Liked Songs"></NextUserButton>
            <div className={styles.div}>
                <UserCard arrayNumber={0} slot={"spotifyTracks"}></UserCard>
                <UserCard arrayNumber={1} slot={"spotifyTracks2"}></UserCard>
                <UserCard arrayNumber={10000} name="Common Liked Songs" slot={"matches"}></UserCard>
                {/* make this conditional on whether spotifyTracks2 exists or not */}
            </div>
        </section>
    );
};

export default App;
