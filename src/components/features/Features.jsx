import './Features.css'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import QueuePlayNextIcon from '@material-ui/icons/QueuePlayNext';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

export default function Features() {
    return (
        <div className="features">
            <h1>A better viewing experience just for you</h1>
            <div className="feature__container">
                <div className="feature__item">
                    <div className="icon__container">
                    <CancelPresentationIcon className="feature__icon"/>
                    </div>
                    <span>Ad-free uninterrupted experience</span>
                </div>

                <div className="feature__item">
                    <div className="icon__container">
                    <QueuePlayNextIcon className="feature__icon"/>
                    </div>
                    <span>Create your own playlist of movies, series and originals</span>
                </div>

                <div className="feature__item">
                    <div className="icon__container">
                    <PlaylistPlayIcon className="feature__icon"/>
                    </div>
                    <span>Stream on web and app</span>
                </div>

                <div className="feature__item">
                    <div className="icon__container">
                    <LocalMoviesIcon className="feature__icon"/>
                    </div>
                    <span>Thousand of content to watch</span>
                </div>

                
            </div>
        </div>
    )
}
