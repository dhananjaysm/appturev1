'use client';
import { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    // your scroll effects logic here
    let scrollTop = window.pageYOffset;
    // let header = document.getElementById('header');
    if (scrollTop > 200) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }

  render() {
    return <div className=""></div>;
  }
}

export default MyComponent;
