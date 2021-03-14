import logo from './logo.svg';
import './App.css';
import List from './List.jsx';

const list = [
  { val: 'a', p: 'hello1' },
  { val: 'b', p: 'hello2' },
  { val: 'c', p: 'hello3' },
  { val: 'd', p: 'hello4' },
  { val: 'e', p: 'hello5' },
];

function App() {
  return (
    <div className='App'>
      <List
        list={list}
        render={(item) => (
          <>
            <h3>{item.val}</h3>
            <p>{item.p}</p>
          </>
        )}
      />
    </div>
  );
}

export default App;
