'use strict';

export class HomeButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      clicked: false,
      hovered: false,
    };
  }

  handleClick = () => {
    window.location.assign('index.html');
  }

  render() {
    const buttonStyles = {
      border: '1px solid black',
      padding: '5px 20px 5px 20px',
      borderRadius: '20px',
      transform: this.state.hovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.2s ease-in-out',
      backgroundColor: this.state.hovered ? 'rgba(115,139,230,0.7)' : 'white',
      color: this.state.hovered ? 'white' : 'black',
      cursor: this.state.hovered? 'pointer' : 'default',
    }

    return React.createElement(
      'button', { 
        onClick:      this.handleClick,
        onMouseEnter: () => this.setState({ hovered: true }),
        onMouseLeave: () => this.setState({ hovered: false }),
        style: buttonStyles,
      },
      'Home'
    );
  }

}
