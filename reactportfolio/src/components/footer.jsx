import React from 'react';
import '../styles/my.css';

export default class Footer extends React.Component{
  render(){
    return (
      <footer id="mainfooter">
        <hr />
        <span>Designed and Built by Abhijeet Bhagat</span>
        <div>&copy; Abhijeet Bhagat
            <a href="https://github.com/bhagatabhijeet/portfolio">
                <i className="fa fa-github" aria-hidden="true"></i>
            </a>
        </div>
    </footer>
    );
  }
}