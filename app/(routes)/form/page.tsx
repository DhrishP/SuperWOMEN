"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import axios from "axios";
import toast from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

interface TodoItem {
  id: string;
  content: string;
}

export default function Home() {
    
  const [Emial, setEmail] = useState<TodoItem[]>([]);
  const [newEmails, setEmails] = useState<string>("");

    useEffect(() => {
        fetchTodo();
    })

   const fetchTodo = async () => {  
    const res = await axios.get('http:localhost:3000/api/form')
    if(!res) return toast.error('Error fetching todo')
    setEmail(
      res.data.map((item: any) => ({
        id: item.id,
        content: item.content,
      }))
    );

   }
  const handleKeyUp = (key: string) => {
    if (key === "Enter" && newEmails) {
      toast.success('key pressed created successfully')
    //   const res =axios.post('http:localhost:3000/api/form', {data: { content:}})
    //     if(!res) return toast.error('Error creating todo')
    //     toast.success('Todo created successfully')
    }
  };

  const handlePost =async (email: string) => {
    if (email) {
      const res = await axios.post('http:localhost:3000/api/form', {data: { content:email}})
        if(!res) return toast.error('Error creating todo')
        toast.success('Todo created successfully')
    }else{
        toast.error('Please enter an email')
    }
  }

  const handleupdate = async (id: number, email: string) => {
    if (email) {
        const res = await axios.put('http:localhost:3000/api/form', {data: { id:id, content:email}})
    }
  }

  const handleDelete = async (id: number) => {
    const res = axios.delete('http:localhost:3000/api/delete', {data: {id: id}})
    if(!res) return toast.error('Error deleting todo')
    toast.success('Todo deleted successfully')
  };

  const reorder = (list: TodoItem[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const items = reorder(Emial, source.index, destination.index);

    setEmail(items);
  };

  return (
    <>
      <div className="flex justify-center pt-40">
        <div className="max-w-sm w-full shadow-lg bg-white p-8 rounded-xl opacity-70">
          <div className="flex justify-center cursor-default bg-gray-200 rounded-3xl px-4 py-1 color-gray hover:scale-110 transition-all">
            <div className="w-full p-3">
              <p className="text-3xl text-gray-600">Emergency Contacts</p>
            </div>
          </div>

          <div className="relative mt-10">
            <div className="absolute inset-y-0 left-2 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />{" "}
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
            <input
              type="email"
              id="newEmails"
              value={newEmails}
              onChange={(e) => setEmails(e.target.value)}
              onKeyUp={(e) => handleKeyUp(e.key)}
              className="block w-full pl-10 p-2 border-4 rounded-full bg-gray-600 text-white"
              placeholder="Enter Your Email"
            />
          </div>

          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(droppableProvided) => (
                <div
                  {...droppableProvided.droppableProps}
                  ref={droppableProvided.innerRef}
                >
                  <ul className="block w-full pt-6">
                    {Emial?.map((item, index) => {
                      return (
                        <Draggable
                          draggableId={item.id}
                          key={item.id}
                          index={index}
                        >
                          {(draggableProvided) => (
                            <div
                              {...draggableProvided.draggableProps}
                              {...draggableProvided.dragHandleProps}
                              ref={draggableProvided.innerRef}
                            >
                              <li
                                key={item.id}
                                className="w-full border-2 rounded-xl mt-2 hover:border-blue-300"
                              >
                                <input
                                  type="checkbox"
                                  className="float-left block w-6 h-6 m-3"
                                />
                                <button
                                  onClick={() => handleDelete(index)}
                                  className="float-right w-7 h-7 m-2.5 rounded-2xl bg-red-700 text-gray-200 shadow-md hover:bg-red-500 hover:scale-105"
                                >
                                  x
                                </button>
                                <label className="block w-full p-3">
                                  {item.content}
                                </label>
                              </li>
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                  </ul>
                  {droppableProvided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </>
  );
}
