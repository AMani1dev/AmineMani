import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

export default function ContactForm() {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_87yii5t", // Replace with your EmailJS service ID
  //       "template_kh2hezr", // Replace with your EmailJS template ID
  //       form.current,
  //       "ayIc0MDuk6xCtvIvg" // Replace with your EmailJS user ID
  //     )
  //     .then(
  //       (result) => {
  //         console.log("Email sent successfully!", result.text);
  //         alert("Message sent!");
  //         form.current.reset();
  //       },
  //       (error) => {
  //         console.error("Failed to send email", error.text);
  //         alert("Something went wrong. Please try again.");
  //       }
  //     );
  // };


  const sendEmail = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
  
    const response = await fetch("https://formspree.io/f/mnnpbvkr", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
  
    if (response.ok) {
      // alert("Message sent!");
      form.current.reset();
    } 
    else {
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="p-2">
        <ul className="p-2">
          <li className="vstack py-4 gap-3 step--1">
            <label className="fw-bold" htmlFor="name">
              what's your name?
            </label>
            <input
              className="text-white_secondary"
              id="name"
              type="text"
              name="name"
              required
              placeholder="amine mani"
            />
          </li>

          <li className="vstack py-4 gap-3">
            <label className="fw-bold" htmlFor="email">
              what's your email?
            </label>
            <input
              className="text-white_secondary"
              id="email"
              type="email"
              name="email"
              required
              placeholder="AM@gmail.com"
            />
          </li>

          <li className="vstack py-4 gap-3">
            <label className="fw-bold" htmlFor="organization">
              what's the name of your organization?
            </label>
            <input
              className="text-white_secondary"
              id="organization"
              type="text"
              name="organization"
              required
              placeholder="A & M"
            />
          </li>

          <li className="vstack py-4 gap-3">
            <label className="fw-bold" htmlFor="service">
              What services are you looking for?
            </label>
            <input
              className="text-white_secondary"
              id="service"
              type="text"
              name="service"
              required
              placeholder="landing page, web app..."
            />
          </li>

          <li className="vstack py-4 gap-3">
            <label className="fw-bold" htmlFor="message">
              your message
            </label>
            <textarea
              className="text-white_secondary"
              rows={8}
              name="message"
              id="message"
              placeholder="hello amine can you help me with ..?"
            ></textarea>
          </li>

          <div className="mt-5 overlap__wrapper">
            <hr className="align-self-center z-n1" />
            <button
              type="submit"
              className="circle-btn ms-auto rounded-circle border-0 magnetic text-white_secondary"
            >
              send it
            </button>
          </div>
        </ul>
      </form>
    </>
  );
}
