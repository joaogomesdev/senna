import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { gql } from "@apollo/client";
import { format, isPast } from "date-fns";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export const Lesson = ({ title, slug, availableAt, type }: Props) => {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormat = format(availableAt, "EEEE' • 'd' of 'MMMM' • 'p");

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormat}</span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-purple-500 ">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Available!
            </span>
          ) : (
            <span className="text-sm text-purple-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Soon...
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-purple-600 font-bold">
            {type === "live" ? "Live" : "Class"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </Link>
  );
};
