/** @jsx jsx */
import { jsx } from "@emotion/react"

const CardContainer = {
  borderRadius: 6,
  color: "black",
  backgroundSize: "cover",
  backgroundColor: "white",
  boxShadow: "0px 1px 5px 0px rgba(0,0,0,0.15)",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "47%",
  height: 380,
  margin: 10,
  overflow: "hidden",
  position: "relative",
  ":hover": {
    backgroundColor: "#e0e0e0",
  },
  cursor: "pointer",
}

const CardContent = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
}

const CardTitle = {
  textAlign: "center",
  fontSize: "1.4em",
  lineHeight: "1em",
  fontWeight: 700,
  color: "black",
  flex: 1,
}

const CardImageContainer = {
  height: 220,
  position: "relative",
  "::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(250,0,150,0.20)",
  },
}

const CardImage = {
  backgroundColor: "#e0e0e0",
  width: "64px",
  height: "64px",
  filter: "grayscale(60%)",
}

const CardBody = {
  padding: 18,
  flex: 1,
  display: "flex",
  color: "#e0e0e0",
  flexDirection: "column",
  justifyContent: "space-around",
}

const CardFooter = {
  display: "flex",
  flexDirection: "Row",
}

const AuthorImage = {
  height: 30,
  width: 30,
  marginRight: 8,
  borderRadius: "50%",
  objectFit: "cover",
  backgroundColor: "#573535",
}

const AuthorAndTrack = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}

const AuthorName = {
  lineHeight: "1em",
  fontSize: "1.1em",
  color: "black",
}

const TrackLength = {
  fontSize: "0.8em",
  color: "black",
}

const TrackCard = () => {
  return (
    <div css={CardContainer}>
      <div css={CardContent}>
        <div css={CardImageContainer}>
          <div css={CardImage} />
        </div>
        <div css={CardBody}>
          <h3 css={CardTitle}>Lorem</h3>
          <div css={CardFooter}>
            <div css={AuthorImage} />
            <div css={AuthorAndTrack}>
              <span css={AuthorName}>Lorem</span>
              <span css={TrackLength}>Lorem</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrackCard
