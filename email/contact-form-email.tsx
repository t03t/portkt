import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type EmailFormProps = {
    message: string;
    senderName: string;
    senderEmail: string;
}

export function EmailForm(EmailFormProps: EmailFormProps) {
    const { message, senderName, senderEmail } = EmailFormProps;
  return (
    <Tailwind>
      <Html className="font-serif">
        <Head />
        <Preview>Message from my Portfolio</Preview>
        <Body className="bg-[#fecdd3] min-h-screen flex items-center justify-center">
          <Container className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
            <Section className="p-4">
              <Heading className="text-2xl text-gray-950 font-bold border-white">New Message from Portfolio!</Heading>
              <Hr />
              <Text className="text-gray-950 leading-tight">
                Sender Name: { senderName }
              </Text>
              <Hr />
              <Text className="text-gray-950">
                Sender Email: { senderEmail }
              </Text>
              <Hr />
              <Text className="text-gray-950">
                {message}
              </Text>
              <Hr />
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  )
}
