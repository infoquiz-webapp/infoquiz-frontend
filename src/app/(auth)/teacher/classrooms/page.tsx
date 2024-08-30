"use client";

import { Button } from "@/components/ui/shadcn/Button";
import { Input } from "@/components/ui/shadcn/Input";
import { Divider } from "@nextui-org/divider";
import { Add, ArrowCircleRight } from "iconsax-react";
import { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Link from "next/link";

const crArray = [
  {
    id: "CR1234",
    name: "1° SF 23/24",
    color: "orange",
    studentsCount: 20,
  },
  {
    id: "CR1235",
    name: "2° SF 23/24",
    color: "orange",
    studentsCount: 16,
  },
  {
    id: "CR1236",
    name: "3° SF 23/24",
    color: "orange",
    studentsCount: 23,
  },
  {
    id: "CR1237",
    name: "1° WD 23/24",
    color: "yellow",
    studentsCount: 13,
  },
  {
    id: "CR1238",
    name: "2° WD 23/24",
    color: "magenta",
    studentsCount: 7,
  },
  {
    id: "CR1239",
    name: "FS 23/24",
    color: "blue",
    studentsCount: 19,
  },
];

const TeacherStudentsPage = () => {
  const [classRooms, setClassRooms] = useState(crArray);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    let filtered = [...crArray];
    if (search) {
      filtered = filtered.filter((st) =>
        st.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setClassRooms(filtered);
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
            Nuova classe
          </Button>
        </div>
      </div>
      {/* CLASSROOMS */}
      <div className="grid grid-cols-3 gap-4">
        {classRooms.map((classRoom) => (
          <Link
            href={"/teacher/classrooms/" + classRoom.id}
            key={classRoom.id}
          >
            <Card>
              <CardHeader className="flex gap-3">
                <div
                  className="size-10 rounded-md"
                  style={{ backgroundColor: classRoom.color }}
                ></div>
                <p className="text-md">{classRoom.name}</p>
                <ArrowCircleRight
                  variant="Bold"
                  className="ml-auto"
                />
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-default-500">
                  Studenti: {classRoom.studentsCount}
                </p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TeacherStudentsPage;
