import style from "./Home.module.scss";

function Home() {
    return (
        <div className="container">
            <div className={style.homepage}>
                <h1>Welcome to Assistentis Homework</h1>
                <p>Made by Kristaps Šteins</p>
            </div>
        </div>
    );
}

export default Home;
