import { Button } from "@/components/common/ui/button.tsx";
import { Input } from "@/components/common/ui/input.tsx";
import { Textarea } from "@/components/common/ui/textarea.tsx";
import { FormspreeProvider, useForm } from "@formspree/react";
import { useRef } from "react";
import { RevealCenter } from "@/components/animations/RevealCenter.tsx";

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
      <section className=" px-5   py-32 md:max-w-[1400px] mx-auto relative">
        <div className={"grid grid-cols-1 sm:grid-cols-2 justify-end"}>
          <div
            className={
              "flex justify-center flex-col items-center mb-14 sm:items-start text-center sm:text-start"
            }
          >
            <h1 className={"text-4xl font-bold mb-6 "}>Get in Touch</h1>
            <p className={"text-sm  text-gray-primary mb-14 sm:max-w-[500px] "}>
              Feel free to reach out! Whether you have a question, want to
              discuss a project, or just say hello, I'm here for you.{" "}
            </p>
            <div className={"flex gap-4"}>
              <Button onClick={emailHandler}>Email Me</Button>
              <Button variant={"outline"} onClick={callHandler}>
                Call Me
              </Button>
            </div>
          </div>
          <div className={"sm:flex justify-end "}>
            <FormspreeProvider project="xeqyzylo">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={
                  "flex justify-center flex-col gap-10 sm:w-[400px] text-black"
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
                <Button type="submit" disabled={form.submitting}>
                  {form.submitting ? (
                    <p className={" z-20"}>submitting</p>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </FormspreeProvider>
          </div>
        </div>
      </section>
    </RevealCenter>
  );
}
