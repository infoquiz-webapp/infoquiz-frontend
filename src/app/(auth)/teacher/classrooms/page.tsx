"use client";

import { Button } from "@/components/ui/shadcn/Button";
import { Input } from "@/components/ui/shadcn/Input";
import { Divider } from "@nextui-org/divider";
import { Add, ArrowCircleRight } from "iconsax-react";
import { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Link from "next/link";
import classRoomsArray from "@/data/classrooms";

const TeacherStudentsPage = () => {
  const [classRooms, setClassRooms] = useState(classRoomsArray);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    let filtered = [...classRoomsArray];
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
