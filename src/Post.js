import {Link} from 'react-router-dom';

export default function Post(){
    return(
        <div className='post'>
      <div className='image'>
      <img src='https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
      </div>
   
      <div className='texts'>
      <h2>Explore images that ignite your creativity</h2>
      <p className='info'>
       <Link className='author'>Abhijeet</Link>
       <time>2023-12-18 21:25</time>
      </p>
      <p className='summary'>Covid situation in India: The Karnataka government has asked people aged above 60 to mandatorily wear face masks. (PTI)</p>
      </div>
    </div>
    );
}