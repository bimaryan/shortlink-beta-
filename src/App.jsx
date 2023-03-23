import { useState } from 'react';
import "../src/App.css";

function App() {
  const [longLink, setLongLink] = useState('');
  const [shortLink, setShortLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API_KEY = '60fe98157a86849abbfc302178e1cd00336bb546';
    const url = `https://api-ssl.bitly.com/v4/shorten`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ long_url: longLink })
    });
    const data = await response.json();
    setShortLink(data.link);
  };

  return (
    <div class="container">
      <form onSubmit={handleSubmit}>
        <h3>Short Link</h3>
        <input className='form-control' type="text" id="longLink" value={longLink} onChange={(e) => setLongLink(e.target.value)} />
        <button className='btn btn-primary' type="submit">Shorten Link</button>
        <br/>
        {shortLink && <p>Short Link: <a href={shortLink} id="myText" target="_blank" rel="noreferrer">{shortLink}</a></p>}
      </form>
    </div>
  )
}

export default App;