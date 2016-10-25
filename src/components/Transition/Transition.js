import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import transitionStyles from '../../styles/transitions.scss';

const Transition = ({
  children,
  component = 'span',
  appear = true,
  appearTimeout = 0,
  enterTimeout = 250,
  leaveTimeout = 250,
}) => (
  <ReactCSSTransitionGroup
    component={component}
    transitionName={transitionStyles}
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
