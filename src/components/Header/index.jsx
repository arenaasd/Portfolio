import "./style.css";

const Header = (props) => {

    const {title, icon} = props;

    return(
        <div className="container">
            <h2>{title}</h2>
            <span>{icon}</span>
        </div>
    )
}

export default Header;