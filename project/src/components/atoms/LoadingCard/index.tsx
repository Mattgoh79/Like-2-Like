import { FallingLines } from 'react-loader-spinner';
import style from './loadingCard.module.scss';
export const LoadingCard = () => {


    return(
        <div className={style.loadingCard}>
            <h2>Loading Your Spotify Library</h2>
            <FallingLines  wrapperClass={style.loadingAnimation}></FallingLines>
            <p>(Refresh if stuck)</p>

        </div>

    )

}
