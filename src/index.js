import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(<App/>)
// // Initial render: Render an element to the root.
// root.render(<App tab="home" />);

// // During an update, there's no need to pass the container again.
// root.render(<App tab="profile" />);