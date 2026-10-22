import { NameCard } from "../../atoms/nameCard";
import { TrackList } from "../../atoms/trackList/TrackList";
import style from './userCard.module.scss';

type UserCard = {
    arrayNumber: number,
    slot: string
    name?: string
}

export const UserCard = ({arrayNumber, slot, name}: UserCard) => {


//if their slot exist in the sessionStorage. render them
    function doesItExist() {
        if(sessionStorage.getItem(slot) == null){
            return false;
        }
        else if (sessionStorage.getItem(slot) !== null){
            return true;
        }
        else{
            return true; //just in case idk
        }
    }

    const existance = doesItExist();

    if (existance == true){
        return(
            <div className={style.card}>
                <NameCard arrayNumber={arrayNumber} name={name}></NameCard>
                <TrackList slot={slot}></TrackList>
            </div>
        )
    }
    
}