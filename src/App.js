import './App.css';
import ReviewForm from './component/ReviewForm';
import ReviewList from './component/ReviewList';
import ReviewProvider from './ReviewContext';

function App() {
  return (
    <ReviewProvider>
      <div className="App">
        <ReviewForm />
        <ReviewList />
      </div>
    </ReviewProvider>
  );
}

export default App;
