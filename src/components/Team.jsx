import React from "react";
import SectionHeading from "./ui/SectionHeading";
import TeamCard from "./ui/TeamCard";
import { teamMembers } from "../Data";
import Button from "./ui/Button";

const Team = () => {
  return (
    <section id="team" className="mx-auto container px-6 py-12">
      <div className="heading">
        <SectionHeading
          text="Meet the skilled and experienced team behind our successful digital marketing strategies"
          heading="Team"
        />
      </div>

      <div className="cards">
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="border border-black p-8 rounded-3xl shadow-[0_4px_0_0_#000]"
            >
              <TeamCard
                picture={member.picture}
                name={member.name}
                position={member.position}
                bio={member.bio}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-end items-center px-8">
          <Button
            text="See All Members"
            className="bg-black text-white w-full md:w-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
