import styles from "./nameCard.module.scss";

type nameCardProps  = {
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