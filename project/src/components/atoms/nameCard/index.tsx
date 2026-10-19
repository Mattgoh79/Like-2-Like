import { array } from "node:stream/iter";
import styles from "./nameCard.module.scss"

type nameCardProps  = {
    //actuallyl should i do number instead? so then 0 would be the first account_name from the array
    arrayNumber: number;
    name?: string;
}

export const NameCard= ({arrayNumber, name} : nameCardProps)=> {

    const accounts = JSON.parse(sessionStorage.getItem("accounts") ?? "[]");

    return(
        <div className={styles.nameCard}>
            <h1 className={styles.userName}>{name ?? accounts[arrayNumber].display_name}</h1>
        </div>

    )

}