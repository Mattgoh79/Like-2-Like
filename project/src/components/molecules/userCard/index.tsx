import { NameCard } from "../../atoms/nameCard";
import { TrackList } from "../../atoms/trackList/TrackList";
import style from './userCard.module.scss';

//wtv props nameCard and TrackList need are here basically

type UserCard = {
    arrayNumber: number,
    slot: string
    name?: string
}



export const UserCard = ({arrayNumber, slot, name}: UserCard) => {

    return(
        <div className={style.card}>
            <NameCard arrayNumber={arrayNumber} name={name}></NameCard>
            <TrackList slot={slot}></TrackList>
        </div>


    )

}