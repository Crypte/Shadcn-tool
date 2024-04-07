import Image from "next/image";
import { TOOL_LIST } from "@/constants/tool_en";

export const Carrousel = () => {
  
  const shuffledToolList = [...TOOL_LIST].sort(() => Math.random() - 0.5);

  return (
    <div className="scroller">
    <div className="scroller__inner">
        {shuffledToolList.map((tool, index) => (
            <Image key={index} className="rounded-2xl mx-5" src={tool.url_logo} alt={tool.nom} width={55} height={55} priority={true}/>
        ))}
    </div>
    </div>
  );
};