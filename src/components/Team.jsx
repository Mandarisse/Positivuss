import React from "react";
import WorkingProcessCard from "./ui/WorkingProcessCard";
import { workingProccess } from "../data";
import SectionHeading from "./ui/SectionHeading";

const WorkingProcess = () => {
  return (
    <section id="working-process" className="mx-auto container px-6">
      <div className="heading mb-10">
        <SectionHeading
          text="Step-by-Step Guide to Achieving Your Business Goals Step-by-Step Guide to Achieving Your Business Goals"
          heading="Our Working Process"
        />
      </div>

      <div>
        {workingProccess.map((process) => (
          <WorkingProcessCard
            key={process.id}
            text={process.text}
            title={process.title}
            id={process.id}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
