import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

class Root extends React.Component {
	render(){
		return(
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}

export default Root;