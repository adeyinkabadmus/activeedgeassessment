import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArtistList from "./pages/allArtists";
import Layout from './components/Layout';
import Photo from './pages/photos';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<ArtistList />}></Route>
						<Route path="albums/:albumId/photos" element={<Photo />}></Route>
						{/* {<Route path="/tweets" element={<Tweets />} />} */}
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
