//Importing whats required to render
import React from "react";
import styles from "./Header.module.css";
import { contact as contactData } from "../../assets/data/contact";
import { NavItem } from "./NavItem";

export class Header extends React.Component {
  /*Allows users to click*/
  constructor() {
    super();
    this.state = { isShown: false, currentPage: "home" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const newPage = e.currentTarget.getAttribute("value")
      ? e.currentTarget.getAttribute("value")
      : this.state.currentPage;

    this.setState({
      isShown: !this.state.isShown,
      currentPage: newPage
    });
  }
//State is a plain JavaScript object used by React to represent an information about the component's current situation
//Render the header 
//Directs user to the right page
render() {
    return (
      <header className={styles.header}>
        <div>
          <p className={styles.name}>{contactData.name}</p>
          <p className={styles.job}>{contactData.job}</p>
        </div>
        <nav
          className={
            styles.navBar + " " + (this.state.isShown ? styles.show : "")
          }
        >
          <ul>
            <NavItem
              id="nav_about"
              target="/"
              value="About"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
      
            <NavItem
              id="nav_projects"
              target="/projects"
              value="projects"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
            <NavItem
              id="nav_contact"
              target="/contact"
              value="contact"
              onClick={this.handleClick}
              currentPage={this.state.currentPage}
            />
          </ul>
        </nav>
      </header>
    );
  }
}
