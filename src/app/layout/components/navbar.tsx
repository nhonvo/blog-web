import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

interface NavBarProps {
    title: string
}

export default observer(function NavBar(props: NavBarProps) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <Menu.Item className="navbar-brand" as={NavLink} to='/home'>{props.title}</Menu.Item>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Menu.Item className="nav-link" as={NavLink} to='/home'>Home</Menu.Item>
                            </li>
                            <li className="nav-item">
                                <Menu.Item className="nav-link" as={NavLink} to='/about'>About</Menu.Item>
                            </li>
                            <li className="nav-item">
                                <Menu.Item className="nav-link" as={NavLink} to='/contact'>Contact</Menu.Item>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
});