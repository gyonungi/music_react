import Playbar from './components/Playbar/Playbar'
import style from './global.module.scss'
import MainPage from './pages/MainPage'
const App = () => {
	return (
		<div className={style.wrapper}>
			<MainPage />
			<Playbar />
		</div>
	)
}

export default App
