import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArtistList from "./pages/allArtists";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={<ArtistList />} />
					{/* <Route path="/albums" element={<Album />} /> */}
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
