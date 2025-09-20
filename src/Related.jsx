import './Related.css'
function ArticleLink({ imgSrc, href, title, date }) {
  
  const onClickHandler = (() => {
    window.open(href, "_blank");
  });

  return (
    <button className='article-link-container'  onClick={onClickHandler}>
      <div className='article-link'>
        <img className='article-img' src={imgSrc} />
        <a href={href} target="_blank" rel="noopener noreferrer" >{title}</a>
        <div className='help-text'>{date}</div>
      </div>
    </button>
  )
}

function Related() {
  return (
    <div className='related-container'>
      <em>Related</em>
      <div className='articles-container'>
        <ArticleLink
          imgSrc={import.meta.env.VITE_ASSET_PATH + 'assets/gnome.jpg'}
          href="https://dungeonmister.com/guides/races-in-dungeons-dragons/deep-gnome-svirfneblin-race-in-dnd-5e/"
          title="Deep Gnome (Svirfneblin) Playable Race Guide for D&D 5e 2014"
          date="January, 11th 2023"
        />
  
        <ArticleLink
          imgSrc={import.meta.env.VITE_ASSET_PATH + 'assets/mining.jpg'}
          href="https://www.thegamer.com/stardew-valley-fast-mining-level-up-tips/"
          title="How To Quickly Level Up Mining In Stardew Valley"
          date="March 4, 2024"
        />

        <ArticleLink
          imgSrc={import.meta.env.VITE_ASSET_PATH + 'assets/trickster.jpg'}
          href="https://dungeonmister.com/guides/classes-in-dungeons-dragons/arcane-trickster-spell-guide-dnd-2024/#:~:text=The%20arcane%20trickster%20is%20a,of%20a%201%2F3%20caster."
          title="The Best Arcane trickster Spells for D&D 2024 (5.5e)"
          date="January, 12th 2025"
        />
      </div>
    </div>
  )
}

export default Related
