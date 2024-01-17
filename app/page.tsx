import { CreateTodo, TodoTable } from '@/app/ui/todotable'

export default function Home() {
  return (
    <div className="w-full p-8">
      <div className="mb-8 flex w-full justify-center">
        <h1 className="text-xl">Todos!</h1>
      </div>
      <div>
        <TodoTable/>
      </div>
      <div>
        <CreateTodo/>
      </div>
    </div>
  );
}
