import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './configStore';
import Root from './reactComponents/Root';

ReactDOM.render(
	<Root store={configStore()} />,
	document.getElementById('root')
);





