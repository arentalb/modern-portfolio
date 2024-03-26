import { Button } from "@/ui/ui/button.tsx";
import { Input } from "@/ui/ui/input.tsx";
import { Textarea } from "@/ui/ui/textarea.tsx";
import { FormspreeProvider, useForm } from "@formspree/react";
import { useRef } from "react";
import { RevealCenter } from "@/ui/animations/RevealCenter.tsx";

export function CallToAction() {
  const [form, setForm] = useForm("xeqyzylo");
  const formRef = useRef<HTMLFormElement>(null);

  function callHandler() {
    window.location.href = `tel:07702174700`;
  }

  function emailHandler() {
    window.location.href = `mailto:aren.talb00@gmail.com`;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      message: { value: string };
    };

    if (
      target.email.value.trim() !== "" &&
      target.message.value.trim() !== ""
    ) {
      setForm(e);
    }
  }

  if (form && form.succeeded) {
    if (formRef.current) {
      formRef.current.reset();
    }
  }

  return (
    <RevealCenter>
      <section className="relative mx-auto max-w-[1400px] px-5 py-20 sm:py-32">
        <div className={"grid grid-cols-1 justify-end sm:grid-cols-2"}>
          <div
            className={
              "mb-10 flex flex-col items-center justify-center text-center font-bold sm:mb-0 sm:items-start sm:text-start"
            }
          >
            <h1 className={"mb-6 text-4xl"}>Get in Touch</h1>
            <p className={"mb-14 text-sm text-gray-primary sm:max-w-[500px] "}>
              Feel free to reach out! Whether you have a question, want to
              discuss a project, or just say hello, I'm here for you.{" "}
            </p>
            <div className={"space-x-6"}>
              <Button onClick={emailHandler}>Email Me</Button>
              <Button variant={"outline"} onClick={callHandler}>
                Call Me
              </Button>
            </div>
          </div>
          <div className={"sm:flex sm:justify-end"}>
            <FormspreeProvider project="xeqyzylo">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={
                  "flex flex-col justify-center gap-10 text-black sm:w-[400px]"
                }
              >
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here."
                />
                <Button
                  type="submit"
                  disabled={form.submitting || form.succeeded}
                >
                  {form.submitting && "Sending"}
                  {form.succeeded && "Sent"}
                  {form.submitting || form.succeeded || "Send Message "}
                </Button>
              </form>
            </FormspreeProvider>
          </div>
        </div>
      </section>
    </RevealCenter>
  );
}
