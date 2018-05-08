console.log('HOC playground');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ?
        (
          <WrappedComponent {...props} />
        ) : (
          <p>Please Authenticate</p>
        )
      }

    </div>
  )
}

const Authinfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="here are the details" />, document.getElementById('app'));
ReactDOM.render(<Authinfo isAuthenticated={false} info="here are the details" />, document.getElementById('app'));