import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter as Router, Link , Routes} from "react-router-dom";
import Site from './Site';
import Animacao from './animacao';
function App() {
  return (
    <Router>
<Routes>

{/* <Route path='/' element={<><Brincando/><Brincandoz/></>}/>
 */}
 <Route path='/' element={<Animacao/>}> </Route>


</Routes>
    </Router>
  );
}

export default App;
