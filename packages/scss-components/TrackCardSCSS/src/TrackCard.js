import React from "react"
import "@starter-perf/tokens-scss"
import './TrackCard.scss'

const TrackCard = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-image-container">
          <div className="card-image" />
        </div>
        <div className="card-body">
          <h3 className="card-title">Lorem</h3>
          <div className="card-footer">
            <div className="author-image" />
            <div className="author-and-track">
              <span className="author-name">Lorem</span>
              <span className="track-length">Lorem</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackCard
