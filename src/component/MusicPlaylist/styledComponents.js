import styled from 'styled-components'

export const BackgroundImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  height: 70vh;
  width: 100%;
  background-size: cover;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
`
export const BackgroundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: ${props => (props.isYes ? '26px' : '36px')};
  color: #ffffff;
`
export const BackgroundPara = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 28px;
  color: #ffffff;
`
export const PlaylistCard = styled.div`
  background-color: #152850;
  padding: 16px;
`
export const NotFound = styled.div`
  display: flex;
  flex-direction: 'column';
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const SearchInput = styled.input`
  background-color: transparent;
  width: 300px;
  outline: none;
  border: none;
  color: white;
`
export const SearchIcon = styled.div`
  border: 2px solid #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 300px;
  height: 40px;
  border-radius: 8px;
`