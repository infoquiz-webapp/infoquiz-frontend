"use client";

import { Button } from "@/components/ui/shadcn/Button";
import { Input } from "@/components/ui/shadcn/Input";
import classRoomsArray from "@/data/classrooms";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { Add } from "iconsax-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const stArray: any[] = [
  {
    code: "ST1234",
    name: "Mario Rossi",
  },
  {
    code: "ST1235",
    name: "Luca Bianchi",
  },
  {
    code: "ST1236",
    name: "Giulia Verdi",
  },
  {
    code: "ST1237",
    name: "Alessandro Neri",
  },
];

const TeacherStudentsPage = () => {
  const classRoomId = useParams().id;
  const classRoom = classRoomsArray.find((cr) => cr.id === classRoomId);

  const [students, setStudents] = useState<any[]>(stArray);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    let newStudents = [...stArray];
    if (search) {
      newStudents = stArray.filter(
        (student) =>
          student.name.toLowerCase().includes(search.toLowerCase()) ||
          student.code.toLowerCase().includes(search.toLowerCase())
      );
    }
    setStudents(newStudents);
  };

  return (
    <div className="container">
      {/* HEADER */}
      <div className="flex mb-4 gap-4">
        <div
          className="size-12 rounded-md"
          style={{ backgroundColor: classRoom?.color }}
        ></div>
        <h1 className="font-bold text-size-h5">{classRoom?.name}</h1>
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex justify-between gap-3 items-end">
          {/* SEARCH */}
          <Input
            className="w-full sm:max-w-[44%] !bg-transparent"
            placeholder="Search by name..."
            onChange={handleSearchChange}
          />
          {/* ADD BUTTON */}
          <Button variant={"primary"}>
            <Add />
            Nuovo studente
          </Button>
        </div>
      </div>
      <Table
        isStriped
        aria-label="Example static collection table"
        classNames={{
          wrapper: "p-0 rounded-none bg-transparent shadow-none",
        }}
      >
        <TableHeader>
          <TableColumn>Codice</TableColumn>
          <TableColumn>Nome</TableColumn>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.code}>
              <TableCell>{student.code}</TableCell>
              <TableCell>{student.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeacherStudentsPage;
