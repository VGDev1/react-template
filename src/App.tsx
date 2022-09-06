import Victor from 'pages/victor'
import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Victor />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
