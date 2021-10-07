import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";
import { DataProvider } from "./components/DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>Work TO-DOS</h1>
        <p className="yellow">
          Enter text into the input field to add items to your list.
        </p>
        <p className="green">Click the item to mark it as complete.</p>
        <p className="blue">Click the "X" to remove the item from your list.</p>
        <TodoForm />
        <TodoList />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
