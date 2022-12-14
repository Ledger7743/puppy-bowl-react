import { useState } from 'react'
import './App.css'

const playerContainer = document.getElementById('all-players-container');
const fakePlayers =[
  {
    "id":9724,
    "name":"Windsor",
    "breed":"Dog",
    "status":"bench",
    "imageUrl":"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQd6lM4HtInRF3cxw6h3MgUZIIiJCdMgFvXKrhaJrbw61tN3aYpMIVBi0dx0KPv1sdCrLk0sBhPeNVt8m0",
    "createdAt":"2022-12-02T19:45:12.203Z",
    "updatedAt":"2022-12-02T19:45:12.203Z",
    "teamId":533,
    "cohortId":283
  },
    {
      "id":9375,
    "name":"Arnold",
    "breed":"Terrier",
    "status":"bench",
    "imageUrl":"https://images.pexels.com/photos/4088307/pexels-photo-4088307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "createdAt":"2022-12-02T15:03:52.558Z",
    "updatedAt":"2022-12-02T15:03:52.558Z",
    "teamId":null,"cohortId":283
  },
  {
    "id":9377,"name":"Walter"
    ,"breed":"Bernese Mountain Dog"
    ,"status":"bench"
    ,"imageUrl":"https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","createdAt":"2022-12-02T15:04:38.173Z"
    ,"updatedAt":"2022-12-02T15:04:38.173Z"
    ,"teamId":null
    ,"cohortId":283
  },
]

const Navbar = () => {
  return (
    <nav>
      <ul>
        <a>home</a>
        <a>about</a>
        <a>portfolio</a>
      </ul>
    </nav>
  );
}




function App() {
  return (
  <div id='all-players-container' className="App">
    <Navbar />
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{fakePlayers[0].name}</p>
          <p class="pup-number">#{fakePlayers[0].id}</p>
        </div>
        <img src={fakePlayers[0].imageUrl}  />
        <button class="detail-button" data-id={fakePlayers[0].id}>See details</button>
        <button class="delete-button" data-id={fakePlayers[0].id}>Remove from roster</button>
      </div>
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{fakePlayers[1].name}</p>
          <p class="pup-number">#{fakePlayers[1].id}</p>
        </div>
        <img src={fakePlayers[1].imageUrl}  />
        <button class="detail-button" data-id={fakePlayers[1].id}>See details</button>
        <button class="delete-button" data-id={fakePlayers[1].id}>Remove from roster</button>
      </div>
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">{fakePlayers[2].name}</p>
          <p class="pup-number">#{fakePlayers[2].id}</p>
        </div>
        <img src={fakePlayers[2].imageUrl}  />
        <button class="detail-button" data-id={fakePlayers[2].id}>See details</button>
        <button class="delete-button" data-id={fakePlayers[2].id}>Remove from roster</button>
      </div>
      </div>
    
  );
  
}

export default App 
// Not sure why there is a warning:invalid dom in the client console.
