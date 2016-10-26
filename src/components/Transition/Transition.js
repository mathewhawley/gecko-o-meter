import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './Transitions.scss';

const Transition = ({
  children,
  component = 'span',
  appear = true,
  appearTimeout = 750,
  enterTimeout = 250,
  leaveTimeout = 250,
}) => (
  <ReactCSSTransitionGroup
    component={component}
    transitionName={styles}
    transitionAppear={appear}
    transitionAppearTimeout={appearTimeout}
    transitionEnterTimeout={enterTimeout}
    transitionLeaveTimeout={leaveTimeout}
  >
    {children}
  </ReactCSSTransitionGroup>
);

Transition.propTypes = {
  children: PropTypes.element.isRequired,
  component: PropTypes.string,
  appear: PropTypes.bool,
  appearTimeout: PropTypes.number,
  enterTimeout: PropTypes.number,
  leaveTimeout: PropTypes.number,
};

export default Transition;
