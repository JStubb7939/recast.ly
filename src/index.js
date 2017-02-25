// TODO: Render the `App` component to the DOM

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (<li>{this.props.grocery}</li>);
//   }
// }

// var GroceryList = (props) => (
//   <ul>
//     {props.grocery.map(grocery => (
//       <GroceryListItem grocery={grocery} />
//     )}
//   <ul>
// );

// var App = () => (
//   <div>
//     <h2>GroceryList</h2>
//     <GroceryList grocery{['Bread', 'Milk']}/>
//   </div>
// );

const app = document.getElementById('app');

ReactDOM.render(<App />, app);