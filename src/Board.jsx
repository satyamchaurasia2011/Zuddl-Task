import React, { useEffect, useState } from "react";
import Stage from "./components/Stage";

function Board() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("mockAPI.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="flex justify-start overflow-auto px-4 mt-6 gap-5 text-black">
        {
            data?.map(stage => {
                return <Stage
                key={stage.id}
                  stageName={stage.stageName}
                  tasks={stage.tasks}
                />
            })
        }
    </div>
  );
}

export default Board;
