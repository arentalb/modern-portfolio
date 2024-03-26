import { RevealCenter } from "@/components/animations/RevealCenter.tsx";
import { Button } from "@/components/common/ui/button.tsx";
import { Input } from "@/components/common/ui/input.tsx";

export function ProjectsQuerySection() {
  return (
    <RevealCenter>
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-5 sm:py-32">
        <div className={"flex items-center font-bold"}>
          <div className={"flex gap-4 text-black"}>
            <Input
              className={"text-md w-80"}
              id="search"
              name="search"
              type="text"
              placeholder="React..."
            />
            <Button
              className={"text-md w-32 space-x-4 font-bold"}
              variant={"outline"}
            >
              search
            </Button>
          </div>
        </div>
      </section>
    </RevealCenter>
  );
}
