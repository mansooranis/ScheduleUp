import './App.css';
import GetTimeTable from './Pages/TimeTable/timetable';
import { week } from './Pages/TimeTable/test_data';

function App() {
  return (
    <div className="App">
      <GetTimeTable prop = {week} />
    </div>
  );
}

export default App;
