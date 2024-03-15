import { Button } from "@/components/common/ui/button.tsx";
import { Input } from "@/components/common/ui/input.tsx";
import { Textarea } from "@/components/common/ui/textarea.tsx";
import { FormspreeProvider, useForm } from "@formspree/react";
import { useRef } from "react";

export function CallToAction() {
  const [form, setForm] = useForm("xeqyzylo");
  const formRef = useRef(null);

  function callHandler() {
    window.location.href = `tel:07702174700`;
  }

  function emailHandler() {
    window.location.href = `mailto:aren.talb00@gmail.com`;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      e.target.email.value.trim() !== "" &&
      e.target.message.value.trim() !== ""
    ) {
      setForm(e);
    }
  }

  if (form.succeeded) {
    formRef.current.reset();
  }
  return (
    <section className=" px-5   py-32 md:max-w-[1400px] mx-auto relative">
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
              <Input id="email" name="email" type="email" placeholder="Email" />
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
  );
}
