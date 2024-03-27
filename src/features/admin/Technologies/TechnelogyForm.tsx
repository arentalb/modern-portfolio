import { Label } from "@/components/common/ui/label.tsx";
import { Input } from "@/components/common/ui/input.tsx";
import { Button } from "@/components/common/ui/button.tsx";

export function TechnelogyForm({ mode }) {
  return (
    <form className={"flex items-end gap-4 py-10"}>
      <div className="grid w-[300px] max-w-sm items-center gap-1.5 ">
        <Label htmlFor="picture">name</Label>
        <Input
          id="picture"
          type="text"
          className={"text-black "}
          placeholder={"CSS"}
        />
      </div>
      <div className="grid w-[300px] max-w-sm items-center gap-1.5 ">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
      {mode === "edit" ? (
        <>
          <Button>edit</Button>
          <Button>delete</Button>
        </>
      ) : (
        <Button>save</Button>
      )}
    </form>
  );
}
