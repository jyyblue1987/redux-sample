import React, { Suspense } from 'react';

import "./App.css";

import {RecoilRoot} from 'recoil';
import {AppContext} from './contexts/context';
import Counter from './components/Counter';
import ReadWriteCount from './components/ReadWriteCount';
import ReadOnlyCount from './components/ReadOnlyCount';
import SelectorCount from './components/SelectorCount';
import RecoilStarCount from './components/RecoilStarCount';
import DelayCount from './components/DelayCount';
import ImageList from './components/ImageList';
import Metadata from './components/Metadata';

function App() {
	const user = {
		nickname: 'danuel1'
	}

	return (
		<>
			<AppContext.Provider value={user}
			>
				<Counter/>
			</AppContext.Provider>

			<RecoilRoot>
				<ReadWriteCount />
				<ReadOnlyCount />
				<SelectorCount />
				<RecoilStarCount />
				<DelayCount />
				<div className="App">
					<Suspense fallback="Loading...">
						<ImageList />
						<Metadata />
					</Suspense>
					
				</div>				
			</RecoilRoot>
		</>
	);
}

export default App;
