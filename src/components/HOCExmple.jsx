import React from 'react';
import UserDetails from './Userprofile/UserDetails';

// The HOC function that takes a component as an argument
function withLoading(WrappedComponent) {
  // Returns a new functional component

  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <p>Loading...</p>;
    }


    
    // Renders the wrapped component with all its original props
    return <WrappedComponent {...props} />;
  };
}

// A simple component
const MyComponent = ({ data }) => {
  return <div>{data}</div>;
};

// The enhanced component
const MyComponentWithLoading = withLoading(MyComponent);

// Usage in App component
export default function App() {
  return (
    <div>
      <MyComponentWithLoading isLoading={true} />
      <MyComponentWithLoading isLoading={false} data="Data Loaded!" />
    </div>
  );
}
