import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './redux/redux-store';
// import store from './redux/store';
import { RootStateType } from './redux/types';

const renderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState());
// store.subscribe(renderEntireTree);

store.subscribe(() => {
    let state = store.getState()
    renderEntireTree(state);
});