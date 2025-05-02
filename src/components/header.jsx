import "../styles/header.css";


function Header({artClickHandler, picClickHandler}) {

    return (
    <header>
        <p>Masterpiece Memory</p>
        <nav>
            <button onClick={artClickHandler}>Art Pieces</button>
            <button onClick={picClickHandler}>Random Pictures</button>
        </nav>
    </header>
    );

};


export default Header;