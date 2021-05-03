// summary;

// we can create a component by extendig the pure component class
// A pure component imppliments the shouldComponentUpdate lifeCycle method by
// performing a shallow comparaision on the state and props of the component

// if there is no difference, the component is not re-rendered - performance boost

// it is a good idea to ensure that all the children components are aslo pure to avoid unexpected behaviour

// never mutate the state  Always return new object that reflects the new state.
