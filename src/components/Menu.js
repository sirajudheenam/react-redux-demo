const Menu = () => {
  return(
    <div>
      <div className="ui inverted menu">
        <a className="active item">
          Home
        </a>
        <a className="item" href='/notes'>
          Notes
        </a>
        <a className="item" href='/todos'>
          ToDos
        </a>
      </div>
    </div>
  )
};
export default Menu;
