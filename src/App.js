import Mainpage from './components/mainpage/mainpage.jsx';
import Places from './components/places/places';
import Things from './components/things/things.jsx';
import Guidelines from './components/guidelines/guidelines';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
   <div className="container">
     <Mainpage />
     <Places />
     <Things />
     <Guidelines/>
     <Footer/>


     </div>
  );
}

export default App;
