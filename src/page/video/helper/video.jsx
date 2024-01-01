import { useEffect, useRef, useState } from 'react'
import useStart from '../../../hooks/useStart'
import { GET } from '../../../utils/api/get'
import { url } from '../../../context/start'
import { useNavigate } from 'react-router-dom'

function VideoHelper({ children }) {
  const [videos, setVideos] = useState([])
  const [active, setActive] = useState(false)
  const [one, setOne] = useState({})
  const { token } = useStart()
  const navigate = useNavigate()
  const videoRef = useRef(null);

  useEffect(() => {
    if (children) {
      GET(`/video/course/${children}/`, token)
        .then(re => re.json())
        .then(baza => {
          setVideos(baza.data)
          setActive(baza.data.length ? baza.status : true)
          setOne(url + baza.data[0]?.file)
          if (baza.status && videoRef.current) {
            videoRef.current.src = url + baza.data[0]?.file;
            videoRef.current.load();
          }
        })
    }
  }, [children, setVideos, setOne, setActive, token])

  const handleClick = (data) => {
    setOne(url + data)
    if (active) {
      videoRef.current.src = url + data;
      videoRef.current.load();
    }
  }

  return (
    <div className='video video_father'>
      <div className='video_left'>
        {active ? (
          <video
            controls
            muted
            onCanPlayThrough={() => videoRef.current?.play()}
            ref={videoRef}
            autoPlay={'autoplay'}
            preload='auto'
            loop
            controlsList="nodownload"
            className='video_tag'
            src={one}
          >
          </video>
        ) : (
          <div className='video_premium'>
            <p>
              Ushbu material pullik obunada. Premium obunaga ega bo'ling va
              Design Mobile Apps: UI, UX va Adobe XD & PSda prototiplash va
              boshqa barcha kurslarni hozir tomosha qiling!
            </p>
            <button onClick={() => navigate('/payment')}>Premium</button>
          </div>
        )}
      </div>
      <ul className='video_right'>
        {videos.length
          ? videos.map((e, i) => (
            <li
              onClick={() => handleClick(e?.file)}
              key={i}
              className={
                url + e?.file === one
                  ? 'video_item video_active'
                  : 'video_item'
              }
            >
              <div className='video_item-top'>
                <p>{e?.sequence}-Dars</p>
                <span>{e?.duration}</span>
              </div>
              <h3>{e?.text}</h3>
            </li>
          ))
          : null}
      </ul>
    </div>
  )
}

export default VideoHelper
