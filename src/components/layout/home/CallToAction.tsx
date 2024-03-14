import { Button } from "@/components/common/ui/button.tsx";
import { Input } from "@/components/common/ui/input.tsx";
import { Textarea } from "@/components/common/ui/textarea.tsx";

export function CallToAction() {
  return (
    <section className=" px-5   py-32 md:max-w-[1400px] mx-auto ">
      <div className={"grid grid-cols-1 sm:grid-cols-2 justify-end"}>
        <div
          className={
            "flex justify-center flex-col items-center mb-14 sm:items-start text-center sm:text-start"
          }
        >
          <h1 className={"text-4xl font-bold mb-6 "}>Get in Touch</h1>
          <p className={"text-sm  text-gray-primary mb-14 sm:max-w-[500px] "}>
            Feel free to reach out! Whether you have a question, want to discuss
            a project, or just say hello, I'm here for you.{" "}
          </p>
          <div className={"flex gap-4"}>
            <Button>Email Me</Button>
            <Button variant={"outline"}>Call Me</Button>
          </div>
        </div>
        <div className={"sm:flex justify-end "}>
          <div className={"flex justify-center flex-col gap-10 sm:w-[400px] "}>
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Type your message here." />
            <Button>Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
