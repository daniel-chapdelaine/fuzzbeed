import './App.css'
import Comments from './Comments'
import Related from './Related'
function App() {
  const title = "12 Iconic GourdPoggers Moments That Really Obie our Diggles";
  return (
    <div className='container'>
      <h1>{title}</h1>
      <h2>The Actual Article Here</h2>
      <Related />
      <Comments articleTitle={title} />
      {/* about the author */}
    </div>
  )
}

export default App
