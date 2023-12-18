
import './App.css';
import Header from './Header';
import Post from './Post';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <main>
      <Header/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </main>
    </>,
  },
]);

function App() {
  return (
    
    <RouterProvider router={router} />
   
    
    
   
  );
}

export default App;
