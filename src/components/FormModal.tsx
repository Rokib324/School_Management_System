import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

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

  // Map each type to its icon
  const icons = {
    create: IoIosAdd,
    update: GrDocumentUpdate,
    delete: MdDelete,
  };

  const Icon = icons[type];

  return (
    <div>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Icon className="text-white w-5 h-5 cursor-pointer" />
      </button>
    </div>
  );
};

export default FormModal;