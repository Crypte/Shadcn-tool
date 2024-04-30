import React from "react";
import Toolcard from "./Toolcard";
import { Suspense } from "react";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type ToolGridProps = {
  toolIds: number[];
};


const ToolGrid = ({ toolIds }: ToolGridProps) => {
  return (
    <div className="md:grid md:grid-cols-3 gap-5 mt-6 flex flex-col">
      {toolIds.map((id,index) => (
        <Suspense key={index} fallback={<SkeletonCard/>}>
          <Toolcard id={id}/>
        </Suspense>
      ))}
    </div>
  );
};

export default ToolGrid;



function SkeletonCard() {
  return (
    <Card className="bg-muted/10 p-1">
    <div className="flex flex-col space-y-5">
      <Skeleton className="h-[201px] w-[358px] rounded-xl" />
      <div className="flex gap-3">
        <Skeleton className="w-16 h-16 rounded-xl" />
        <div className="flex flex-col justify-between py-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="space-y-2.5">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      </div>
    </div>
    </Card>
  );
}