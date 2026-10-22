import { useRef, useState } from "react";
import Styles from './TrackList.module.scss';

type TrackListProps = {
    slot: string
}

type SortButtonProps = {
    slot: string;
    allTracks: any[];
    setAllTracks: React.Dispatch<React.SetStateAction<any[]>>;
    onSort: () => void;
}

export const SortButton = ({slot, allTracks, setAllTracks, onSort}: SortButtonProps) => {
    const [lastSort, setLastSort] = useState("");
    const [isReversed, setIsReversed] = useState(false);

    const sortTracks = (sortType: string, reverse = false) => {
        let sortedTracks: any[];

        if (sortType === "Latest") {
            sortedTracks = JSON.parse(
                sessionStorage.getItem(slot) ?? "[]"
            );
        } else if (sortType === "Artist") {
            sortedTracks = [...allTracks].sort((a, b) => {
                const artistA = a.track?.artists?.[0]?.name ?? "";
                const artistB = b.track?.artists?.[0]?.name ?? "";

                return artistA.localeCompare(artistB);
            });
        } else {
            sortedTracks = [...allTracks].sort((a, b) =>
                (a.track?.name ?? "").localeCompare(b.track?.name ?? "")
            );
        }

        if (reverse) {
            sortedTracks.reverse();
        }

        setAllTracks(sortedTracks);
        setLastSort(sortType);
        setIsReversed(reverse);
        onSort();
    };
    const toggleDirection = () => {
        sortTracks(lastSort, !isReversed);
    };

    return(

        <div className={Styles.sortSection}>
            <label>Sort by:  </label>
            <select className={Styles.selectionButton} value={lastSort} onChange={(event) => {
                    if (event.target.value) {
                        sortTracks(event.target.value); 
                    }}}>
                <option value="Latest">Latest</option>
                <option value="Artist">Artist</option>
                <option value="Song">Song</option>
            </select>
            <button className={Styles.directionButton} onClick={toggleDirection}>
                {isReversed ? "Ascending ▴"   : "Descending ▾"}
            </button>
        </div>

    )

}



export const TrackList = ({slot}: TrackListProps) => {
    const trackListRef = useRef<HTMLDivElement>(null);
    const [allTracks, setAllTracks] = useState<any[]>(() => {
        return JSON.parse(sessionStorage.getItem(slot) ?? "[]");
    });

    const [currentPage, setCurrentPage] = useState(1);
    const tracksPerPage = 20;

    const totalPages = Math.ceil(allTracks.length / tracksPerPage);

    const startIndex = (currentPage - 1) * tracksPerPage;
    const endIndex = startIndex + tracksPerPage;

    const currentTracks = allTracks.slice(startIndex, endIndex);

    const changePage = (newPage: number) => {
    setCurrentPage(newPage);

    trackListRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
};

    return (
        <div className={Styles.entireTrackSection} ref={trackListRef}>
            <h2 className={Styles.header}>Track List ({allTracks.length})</h2>
            <SortButton slot={slot} allTracks={allTracks} setAllTracks={setAllTracks} onSort={() => setCurrentPage(1)}></SortButton>
            {currentTracks.map((item, index) => (
                <div className={Styles.eachTrack} key={item.track?.id ?? index}>
                    <p className={Styles.trackName}>
                        {item.track?.name}
                    </p>

                    <p className={Styles.artistName}>
                        {item.track?.artists
                            ?.map((artist: { name: string }) => artist.name)
                            .join(", ")}
                    </p>
                </div>
            ))}
            <div className={Styles.pagination}>
                <button
                    className={Styles.pageButton}
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <span>
                    Page {currentPage} of {totalPages || 1}
                </span>

                <button
                    className={Styles.pageButton}
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};