import './Header.css'
function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className='subtitle'>Come for the giggles, stay for the Diggles</div>
      <div>[ARTICLE PEDNING REVIEW]</div>
      <div>
        <div className='info'>September 23, 1993</div> 
      </div>
      <div>
        <div className='info'>contributor - Blog_Poggz2</div>
      </div>
    </div>
  )
}

export default Header
