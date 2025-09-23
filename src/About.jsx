import './About.css'
function About() {
  return (
    <div className="about-container">
      <img className='profile-pic' src="/fuzzbeed/bloggers.jpg"/>
      <div>
        <h2 style={{ marginTop: 0, marginBottom: '4px' }}>About the author</h2>
        <h3 style={{ marginTop: 0, marginBottom: '4px' }}>Blog_Poggz2</h3>
        <p>
          In stark contrast to myself, Blog_Poggz2 authentically cares for the 
        </p>
        <div className='signature'>- le_scribe</div>
      </div>
    </div>
  )
}

export default About