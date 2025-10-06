
export default function CandidatesBoard() {
  return (
    <div className="p-6 text-center text-gray-600">
      Candidates Board is under construction.
    </div>
  );
}
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
// import { SortableItem } from "../components/SortableItem"; 
// const initialStages = {
//   applied: [
//     { id: "1", name: "Aditi Sharma", email: "aditi@example.com" },
//     { id: "2", name: "Raj Patel", email: "raj@example.com" },
//   ],
//   interview: [
//     { id: "3", name: "Karan Mehta", email: "karan@example.com" },
//   ],
//   hired: [],
//   rejected: [],
// };

// export default function CandidatesBoard() {
//   const [stages, setStages] = useState(initialStages);

//   const handleDragEnd = (event) => {
//     const { active, over } = event;
//     if (!over || active.id === over.id) return;

//     const fromStage = Object.keys(stages).find((key) =>
//       stages[key].some((c) => c.id === active.id)
//     );
//     const toStage = over.id;
//     const movedCandidate = stages[fromStage].find((c) => c.id === active.id);

//     setStages((prev) => {
//       const updated = { ...prev };
//       updated[fromStage] = prev[fromStage].filter((c) => c.id !== active.id);
//       updated[toStage] = [...prev[toStage], movedCandidate];
//       return updated;
//     });
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold text-gray-800">Candidates</h1>
//         <input
//           type="text"
//           placeholder="Search by name or email..."
//           className="border px-3 py-2 rounded-md"
//         />
//       </div>

//       <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//         <div className="grid grid-cols-4 gap-4">
//           {Object.entries(stages).map(([stage, candidates]) => (
//             <div
//               key={stage}
//               id={stage}
//               className="bg-white p-3 rounded-xl shadow-md"
//             >
//               <h2 className="text-lg font-semibold capitalize mb-3 text-emerald-600">
//                 {stage}
//               </h2>
//               <SortableContext
//                 id={stage}
//                 items={candidates.map((c) => c.id)}
//                 strategy={verticalListSortingStrategy}
//               >
//                 {candidates.map((c) => (
//                   <Link
//                     key={c.id}
//                     to={`/candidates/${c.id}`}
//                     className="block bg-gray-50 hover:bg-emerald-50 border rounded-lg p-3 mb-2"
//                   >
//                     <p className="font-medium">{c.name}</p>
//                     <p className="text-sm text-gray-600">{c.email}</p>
//                   </Link>
//                 ))}
//               </SortableContext>
//             </div>
//           ))}
//         </div>
//       </DndContext>
//     </div>
//   );
// }
