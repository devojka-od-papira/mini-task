import React from 'react';

import "./Container.scss"

const Container: React.FC = ({ children }) => (
  <div className='container'>{children}</div>
);

export default Container;