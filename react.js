//React is a library ,not a framework
//react uses react virtual DOM(Document Object Model)
//react first creates an exact copy of DOM
//react figures out which part is new and only specific part in the virtual DOM
//react copies only the new 
//JSX(Javascript XML) is a syntax extension to javascript ,by Babel
// 1.We can't return more than one HTML element at once,but we can wrap the elements inside a parent HTML tag
//2.We can use JSX inside for loops,if else clauses
// Functional Components(stateless) is basically a javascript 
// function Welcome(props){
//     return <h1>Hello,[props.name]</h1>;
// } 

//const { Component } = require("react");

// function Example(){
//     return(<h1>I'm a Functional Component !</h1>);
// }
// const Example=() =>{
//     return(<h1>I'm a functional component!</h1>);
// };

// Class(Stateful) components
//Props : React is a component-based library which divides the UI into little resusable peices.
// What is "Props" and how to use it in React?
//  * React has a different approach to data flow & manipulation than other frameworks.
// What is Props?
//  * React is a component-based library which divides the UI into little reusable pieces. In some cases, those components need to communicate (send data to each other) and the way to pass data between components is by using props.
//  * "Props" is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
//  * But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)
//  * Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.
// class ParentComponent extends Component{
//     render(){
//         return(
//             <h1>
//             I'm the parent component.
//             <ChildComponent />
//             </h1>
//         );
//{/* <ChildComponent someAttribute={value}
// const addition (firstNum,secondNum)=>(
//     return firstNum+secondNum;
// ); */}

// const ChildCompont=(props)=>(
//     return <p>{props.text}</p>
// );

