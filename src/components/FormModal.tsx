import React, { useState } from "react";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import dynamic from "next/dynamic";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

// Using Lazy Loading
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});


const forms: {
  [key: string]: (type: "create" | "update", data?: any) => React.JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-yellow-500"
      : type === "update"
      ? "bg-sky"
      : "bg-red-500";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

  // Map each type to its icon
  const icons = {
    create: IoIosAdd,
    update: GrDocumentUpdate,
    delete: MdDelete,
  };

  const Icon = icons[type];

  return (
    <div className="">
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Icon className="text-white w-5 h-5 cursor-pointer" />
      </button>
      {open && (<div className="w-screen h-screen absolute top-0 left-0 bg-black/50 bg-opacity-60 flex z-50 items-center justify-center">
        <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
          <Form />
        <div className="absolute top-4 right-4 cursor-pointer">
          <IoIosClose className="text-gray-500 w-8 h-8" onClick={() => setOpen(false)}/>
        </div>
        </div>

      </div>)}
    </div>
  );
};

export default FormModal;