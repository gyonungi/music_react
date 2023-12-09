import { Pause, PlayArrow } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import classNames from 'classnames'
import { useContext } from 'react'
import { AudioContext } from '../../context/AudioContext'
import secondToMinutes from '../../utils/secondToMinutes'
import style from './track.module.scss'
const Track = track => {
	const { id, preview, title, artists, duration } = track

	const { handleToggleAudio, currentTrack, isPlaying } =
		useContext(AudioContext)

	const isCurrentTrack = currentTrack.id === id
	const formatedDuration = secondToMinutes(duration)

	return (
		<div className={classNames(style.track, isCurrentTrack && style.playing)}>
			<IconButton onClick={() => handleToggleAudio(track)}>
				{isCurrentTrack && isPlaying ? <Pause /> : <PlayArrow />}
			</IconButton>
			<img className={style.preview} src={preview} alt='preview' />
			<div className={style.credits}>
				<b>{title}</b>
				<p>{artists}</p>
			</div>
			<p>{formatedDuration}</p>
		</div>
	)
}

export default Track
