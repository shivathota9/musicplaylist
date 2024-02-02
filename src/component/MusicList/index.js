import {AiOutlineDelete} from 'react-icons/ai'
import {
  SongImage,
  SongName,
  SongGenre,
  ItemsContainer,
  ItemsContainer2,
} from './styledComponents'

const MusicList = props => {
  const {eachItems, getDeleted} = props
  const {id, imageUrl, name, genre, duration} = eachItems

  const onDeleteBtn = () => {
    getDeleted(id)
  }

  return (
    <>
      <ItemsContainer style={{listStyleType: 'none'}}>
        <SongImage alt="track" src={imageUrl} />
        <ItemsContainer2>
          <div>
            <SongName>{name}</SongName>
          </div>
          <div
            style={{
              alignSelf: 'flex-end',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SongName style={{marginRight: '16px'}}>{duration}</SongName>
            <button
              data-testid="delete"
              onClick={onDeleteBtn}
              style={{backgroundColor: 'transparent', border: 'none'}}
              type="button"
            >
              <AiOutlineDelete size="18" color="#cbd5e1" />
            </button>
          </div>
          <div>
            <SongGenre>{genre}</SongGenre>
          </div>
        </ItemsContainer2>
      </ItemsContainer>
    </>
  )
}
export default MusicList