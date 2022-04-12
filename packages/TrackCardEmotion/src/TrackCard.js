import React from "react"
import styled from "@emotion/styled"

const TrackCard = () => {
  return (
    <CardContainer>
      <CardContent>
        <CardImageContainer>
          <CardImage />
        </CardImageContainer>
        <CardBody>
          <CardTitle>Lorem</CardTitle>
          <CardFooter>
            <AuthorImage />
            <AuthorAndTrack>
              <AuthorName>Lorem</AuthorName>
              <TrackLength>Lorem</TrackLength>
            </AuthorAndTrack>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  )
}

export default TrackCard

/** Track Card syled components */
const CardContainer = styled.div({
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
})

const CardContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100%",
})

const CardTitle = styled.h3({
  textAlign: "center",
  fontSize: "1.4em",
  lineHeight: "1em",
  fontWeight: 700,
  color: "black",
  flex: 1,
})

const CardImageContainer = styled.div({
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
})

const CardImage = styled.div({
  backgroundColor: "#e0e0e0",
  width: "64px",
  height: "64px",
  filter: "grayscale(60%)",
})

const CardBody = styled.div({
  padding: 18,
  flex: 1,
  display: "flex",
  color: "#e0e0e0",
  flexDirection: "column",
  justifyContent: "space-around",
})

const CardFooter = styled.div({
  display: "flex",
  flexDirection: "Row",
})

const AuthorImage = styled.div({
  height: 30,
  width: 30,
  marginRight: 8,
  borderRadius: "50%",
  objectFit: "cover",
  backgroundColor: "#573535",
})

const AuthorAndTrack = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
})

const AuthorName = styled.span({
  lineHeight: "1em",
  fontSize: "1.1em",
  color: "black",
})

const TrackLength = styled.span({
  fontSize: "0.8em",
  color: "black",
})
