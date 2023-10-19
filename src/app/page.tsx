import AddTask from "./components/AddTasks";
import TodoLists from "./components/TodoLists";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask />
        <TodoLists />
      </div>
      {/* <h1 className="text-center underline">Next 13</h1>
      <button className="btn">Click me</button> */}
    </main>
  );
}
