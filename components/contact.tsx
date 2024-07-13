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
          className="scroll-mt-28 mb-25 sm:mb-28 w-[min(100%,38rem)] mx-auto text-center">
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-lg text-gray-800">
                Please contact me at <a className="underline text-blue-600" href="mailto:itstirm@gmail.com">itstirm@gmail.com</a> or fill out the form below.
            </p>
            <form 
                ref={formRef}
                className="mt-10 flex flex-col gap-4"
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
                    className="h-14 px-4 rounded-lg border transition-all focus:ring-2 focus:ring-indigo-500" 
                    type="text" 
                    name="senderName" 
                    placeholder="Name" 
                    required 
                />
                <input 
                    className="h-14 p-4 my-3 rounded-lg border transition-all focus:ring-2 focus:ring-indigo-500"
                    type="email"
                    name="senderEmail"
                    placeholder="Email"
                    required
                />
                <textarea
                    className="h-52 rounded-lg border p-4 transition-all focus:ring-2 focus:ring-indigo-500"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <div className="flex justify-center mt-2">
                    <SubmitButton />
                </div>
            </form>
            <ToastContainer />
        </motion.section>
    )
}
