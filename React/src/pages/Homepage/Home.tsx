import style from "./Home.module.scss";

const Home = () => (
    <div className="container">
        <div className={style.homepage}>
            <h1>Welcome to Assistentis Homework</h1>
            <span className={style.madeInfo}>
                    Made by Kristaps Šteins
            </span>
        </div>
    </div>
);


export default Home;
