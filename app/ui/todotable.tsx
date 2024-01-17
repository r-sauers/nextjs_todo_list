import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function TodoTableRow({ children }: { children: React.ReactNode }) {
  return <tr className="w-full bg-slate-800 p-3 rounded-lg">{children}</tr>;
}

function Todo({ description }: { description: string }) {
  return (
    <TodoTableRow>
      <td className="w-8">
        <div className="p-3 flex justify-center">
          <form className="">
            <input type="checkbox" />
          </form>
        </div>
      </td>
      <td className="p-3">{description}</td>
    </TodoTableRow>
  );
}

export function CreateTodo() {
  return (
    <div className="block w-full bg-slate-800 p-3 rounded-lg">
      <form className="flex w-full">
        <Link
          href="/create"
          className="flex-none mr-8 flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Create Todo</span>{" "}
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
        <input className="block grow bg-slate-600 text-slate-300 px-3 rounded-md" />
      </form>
    </div>
  );
}

export function TodoTable() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>o</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <Todo description="Do this task." />
        <Todo description="Do another task." />
      </tbody>
    </table>
  );
}
