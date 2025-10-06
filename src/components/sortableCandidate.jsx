import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableCandidate = React.memo(function SortableCandidate({ id, candidate }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white border-2 border-slate-200 rounded-lg p-3 cursor-grab active:cursor-grabbing hover:border-emerald-300 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-3">
        <img
          src={candidate.avatar}
          alt={candidate.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          loading="lazy"
          decoding="async"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-slate-800 text-sm truncate">
            {candidate.name}
          </h3>
          <p className="text-xs text-slate-500 truncate">{candidate.email}</p>
        </div>
      </div>
    </div>
  );
});

export default SortableCandidate;