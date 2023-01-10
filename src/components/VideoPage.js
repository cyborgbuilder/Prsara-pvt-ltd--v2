import React from 'react'
import styled from 'styled-components'
function VideoPage() {
  return (
    <Container>
      <video src='./back.mp4' autoPlay muted  />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`
export default VideoPage
