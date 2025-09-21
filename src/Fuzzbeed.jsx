import './Fuzzbeed.css';

function Fuzzbeed({ fontSize }) {
  return (
    <div className="fuzzbeed-container">
      <img style={{ width: fontSize, height: fontSize }} src="/fuzzbeed/fuzzbeed-gourd.png" />
      <div className="fuzzbeed-text" style={{ fontSize }}>FuzzBeed</div>
    </div>
  )
}

export default Fuzzbeed
