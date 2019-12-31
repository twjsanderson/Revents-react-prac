import { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Used so when a user clicks on an react-router-link to a different page they are presented with the top of that page not the middle of it

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);