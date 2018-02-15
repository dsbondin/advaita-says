import React from 'react';

const Home = () => {
  return (
    <div style={{margin: "50px 20px"}}>
      <img className="pull-left" style={{paddingRight: "20px"}} src={require('../images/Nisargadatta_Maharaj.jpg')} height="320px"/>
      <h1 style={{textAlign: "center", marginBottom: "20px"}}>Welcome, stranger!</h1>
      <p style={{paddingLeft: "40px"}}>This little app will display to you some random quotes by <a href="https://en.wikipedia.org/wiki/Nisargadatta_Maharaj">Nisargadatta Maharaj</a>.
      If you like the quote you can save it to your collection. Or you can add one using
      the 'New Quote' form.</p>
    </div>

  )
}

export default Home;
