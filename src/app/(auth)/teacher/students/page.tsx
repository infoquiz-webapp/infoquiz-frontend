"use client";

import { Button } from "@/components/ui/shadcn/Button";
import { Input } from "@/components/ui/shadcn/Input";
import classRoomsArray from "@/data/classrooms";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Add } from "iconsax-react";
import { Key, useState } from "react";

const classRooms = ["Tutte", ...classRoomsArray.map((cr) => cr.name)];

const stArray: any[] = [
  {
    code: "ST1234",
    name: "Mario Rossi",
    classRoom: "1° WD 23/24",
  },
  {
    code: "ST1235",
    name: "Luca Bianchi",
    classRoom: "2° SF 23/24",
  },
  {
    code: "ST1236",
    name: "Giulia Verdi",
    classRoom: "FS 23/24",
  },
  {
    code: "ST1237",
    name: "Alessandro Neri",
    classRoom: "3° SF 23/24",
  },
  {
    code: "ST1238",
    name: "Francesca Gialli",
    classRoom: "2° WD 23/24",
  },
  {
    code: "ST1239",
    name: "Lorenzo Blu",
    classRoom: "1° SF 23/24",
  },
  {
    code: "ST1240",
    name: "Marta Rosa",
    classRoom: "2° SF 23/24",
  },
  {
    code: "ST1241",
    name: "Simone Azzurro",
    classRoom: "FS 23/24",
  },
  {
    code: "ST1242",
    name: "Anna Marrone",
    classRoom: "3° SF 23/24",
  },
  {
    code: "ST1243",
    name: "Marco Viola",
    classRoom: "1° WD 23/24",
  },
  {
    code: "ST1244",
    name: "Elisa Celeste",
    classRoom: "2° WD 23/24",
  },
  {
    code: "ST1245",
    name: "Davide Grigio",
    classRoom: "1° SF 23/24",
  },
  {
    code: "ST1246",
    name: "Chiara Lilla",
    classRoom: "2° SF 23/24",
  },
  {
    code: "ST1247",
    name: "Stefano Nero",
    classRoom: "FS 23/24",
  },
  {
    code: "ST1248",
    name: "Sofia Bianca",
    classRoom: "3° SF 23/24",
  },
  {
    code: "ST1249",
    name: "Matteo Argento",
    classRoom: "1° WD 23/24",
  },
  {
    code: "ST1250",
    name: "Giorgia Dorata",
    classRoom: "2° WD 23/24",
  },
  {
    code: "ST1251",
    name: "Federico Verde",
    classRoom: "1° SF 23/24",
  },
  {
    code: "ST1252",
    name: "Valentina Corallo",
    classRoom: "2° SF 23/24",
  },
  {
    code: "ST1253",
    name: "Nicola Platino",
    classRoom: "FS 23/24",
  },
];

const TeacherStudentsPage = () => {
  const [selectedClassRoom, setSelectedClassRoom] = useState<Key>(
    classRooms[0]
  );

  const [students, setStudents] = useState<any[]>(stArray);

  const handleClassRoomChange = (classRoom: Key) => {
    setSelectedClassRoom(classRoom);
    let newStudents = [...stArray];
    if (classRoom !== "Tutte") {
      newStudents = stArray.filter(
        (student) => student.classRoom === classRoom
      );
    }
    setStudents(newStudents);
  };

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
      {/* CLASSROOMS */}
      <Tabs
        aria-label="Options"
        color="primary"
        variant="bordered"
        className="mb-4"
        selectedKey={selectedClassRoom as string}
        onSelectionChange={(key) => handleClassRoomChange(key)}
      >
        {classRooms.map((classRoom) => (
          <Tab
            key={classRoom}
            title={
              <div className="flex items-center space-x-2">
                <span>{classRoom}</span>
              </div>
            }
          />
        ))}
      </Tabs>
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
          <TableColumn>Classe</TableColumn>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.code}>
              <TableCell>{student.code}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.classRoom}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeacherStudentsPage;
