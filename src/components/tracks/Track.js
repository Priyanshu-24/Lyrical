import React from 'react'
import { Link } from 'react-router-dom';

const Track = (props)=> {

    const {track}=props;

    return (
        <div className="col-md-12">
            <div className="card mb-5 shadow-sm ">
                <div className="card-body">
                  <h5>{track.track_name}</h5>
                  <p className="card-text">
                     <i className="fa fa-microphone"></i><strong> Artist</strong> : {track.artist_name}
                      <br/>
                    <i className="fa fa-headphones"></i><strong> Album</strong> : {track.album_name}
                  </p>
                  <Link to={`lyrics/track`} className="btn btn-info btn-block">
                      <i className="fa fa-chevron-right"></i>View Lyrics
                  </Link>
                </div>
            </div>
             
        </div>
    )
}

export default Track
