import { useState } from 'react';
import './App.css'
import Article from './Article';
import Comments from './Comments'
import Header from './Header';
import Related from './Related'
import { SubscribeDialog } from './SubscribeDialog';
import Fuzzbeed from './Fuzzbeed';
import useSubscribeDialogLauncher from './useSubscribeDialogLauncher';
import Divider from './Divider';
import About from './About';
function App() {
  const title = "12 Iconic GourdPoggers Moments That Really Obie our Diggles";
  const [ subcribeOpen, setSubscribeOpen ] = useState(false);
  const [ subcribeHasOpened, setSubscribeHasOpen ] = useState(false);
  const action = () => {
    if (subcribeHasOpened) {
      return;
    } else {
      setSubscribeHasOpen(true);
      setSubscribeOpen(true);
    }
  }
  useSubscribeDialogLauncher({ action });  

  return (
    <>
      <div className='head'>
       <Fuzzbeed fontSize='44px' />
      </div>
      <div className='container'>
        <Header title={title}/>
        <Article />
        <Divider />
        <Related />
        <Divider />
        <Comments articleTitle={title} />
        <Divider />
        <About />
      </div>
      <SubscribeDialog isOpen={subcribeOpen} onClose={() => setSubscribeOpen(false)}/>
    </>
  )
}

export default App
