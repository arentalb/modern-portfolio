export function LevelList({ level }) {
  let levelList: JSX.Element = <div></div>;

  switch (level) {
    case "Beginner": {
      levelList = (
        <>
          <Level color={"bg-amber-300"} />
          <Level color={"bg-white"} />
          <Level color={"bg-white"} />
        </>
      );
      break;
    }
    case "Intermediate": {
      levelList = (
        <>
          <Level color={"bg-amber-300"} />
          <Level color={"bg-green-400"} />
          <Level color={"bg-white"} />
        </>
      );
      break;
    }
    case "Advanced": {
      levelList = (
        <>
          <Level color={"bg-amber-300"} />
          <Level color={"bg-green-400"} />
          <Level color={"bg-red-400"} />
        </>
      );
      break;
    }
  }
  return <div className={"flex gap-2"}>{levelList}</div>;
}

function Level({ color }) {
  return <div className={`h-4 w-4 rounded-full ${color}`}></div>;
}
