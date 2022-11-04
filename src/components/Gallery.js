import { GalleryItem } from "./GalleryItem"

export const Gallery = (props) => {
  let myData = props.data.results.read()
  let songs = myData.filter((el) => el.kind === 'song')


  return (
    <div>
      {songs.map((el) => {
        return <GalleryItem track={el} key={el.trackId}/>
      })}
    </div>
  )
}