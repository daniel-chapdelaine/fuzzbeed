import './Header.css'
function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div className='subtitle'>Come for the giggles, stay for the Diggles</div>
      <div>
        <em>September 23, 1993</em> 
      </div>
      <div>
        <em>contributor - Blog_Poggz2</em>
      </div>
      <div>[ARTICLE PEDNING REVIEW]</div>
    </div>
  )
}

export default Header
