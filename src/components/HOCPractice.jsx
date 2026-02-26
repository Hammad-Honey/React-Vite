

// The HOC function that takes a component as an argument
function plasticWrapper(FoodItem) {
// Returns a new functional component

  return function WithPlasticWrapper({ isEating, ...props }) {
    if (isEating) {
      return <FoodItem {...props} />;
    }

    
    // Renders the wrapped component with all its original props
    return <p>I am a wrapper. take off me to eat food.</p>;
  };
}


const Toffee = () => {
    
    return <div>
        I am sweet. 
    </div>
}

const Orange = () => {
    return <>I am sour.</>
}


const MyToffeeWithPlasticWrapper = plasticWrapper(Toffee);
const MyOrangeWithPlasticWrapper = plasticWrapper(Orange)

// Usage in App component
export default function HOCPractice() {
  return (
    <div>
      <MyToffeeWithPlasticWrapper isEating={true} />
      <MyToffeeWithPlasticWrapper isEating={false}/>
      <MyOrangeWithPlasticWrapper isEating={false}/>
      <MyOrangeWithPlasticWrapper isEating={true}/>
    </div>
  );
}
