import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Dialog.scss';
import ContentContainer from 'terra-content-container';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * The header element to be placed within the header area of the dialog.
 */
  header: PropTypes.node.isRequired,
  /*
 * The footer element to be placed within the footer area of the dialog.
 */
  footer: PropTypes.node,
  /*
 * The children to be placed within the main content area of the dialog.
 */
  children: PropTypes.node.isRequired,
};

const Dialog = ({ header, footer, children }) => {
  const DialogClassNames = cx([
    'dialog',
  ]);

  return (<div className={DialogClassNames}>
            <ContentContainer header={header}>
              <div>{children}</div>
              <div>{footer}</div>
            </ContentContainer>
          </div>)
};

Dialog.propTypes = propTypes;

export default Dialog;
