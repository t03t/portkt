"use client";
import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from './submit-btn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const { ref } = useSectionInView('Contact');
    const formRef = useRef<HTMLFormElement>(null);

    const notifySuccess = () => toast.success("Email sent successfully!");
    const notifyError = (error: any) => toast.error(`Error: ${error.message}`);

    return (
        <motion.section id="contact" ref={ref} 
          className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
            <SectionHeading>Contact Me</SectionHeading>
            <p>Please contact me at <a className="underline" href="mailto:itstirm@gmail.com">itstirm@gmail.com</a> or fill out the form below.
            </p>
            <form 
                ref={formRef}
                className="mt-10 flex flex-col"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        notifyError(error);
                        return;
                    }
                    notifySuccess();
                    if (formRef.current) {
                        formRef.current.reset();
                    }
                }}
            >
                <input 
                    className="h-14 px-4 rounded-lg borderBlack transition-all" 
                    type="text" 
                    name="senderName" 
                    placeholder="Name" 
                    required 
                />
                <input 
                    className="h-14 p-4 my-3 rounded-lg borderBlack transition-all"
                    type="email"
                    name="senderEmail"
                    placeholder="Email"
                    required
                />
                <textarea
                    className="h-52 rounded-lg borderBlack p-4  transition-all"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <div className="flex justify-center">
                    <SubmitButton />
                </div>
            </form>
            <ToastContainer />
        </motion.section>
    )
}
