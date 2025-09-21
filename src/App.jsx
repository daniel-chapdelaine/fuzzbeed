import './App.css'
import Article from './Article';
import Comments from './Comments'
import Header from './Header';
import Related from './Related'
function App() {
  const title = "12 Iconic GourdPoggers Moments That Really Obie our Diggles";
  return (
    <div className='container'>
      <Header title={title}/>
      <Article />
      <Related />
      <Comments articleTitle={title} />
      {/* about the author */}
    </div>
  )
}

export default App
