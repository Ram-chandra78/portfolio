import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
      New Contact Form Submission
    </h1>
    <div style={{ marginBottom: '20px' }}>
      <p style={{ fontWeight: 'bold', margin: '5px 0' }}>From: {fullName}</p>
      <p style={{ color: '#666', margin: '5px 0' }}>Email: {email}</p>
    </div>
    <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
      <h2 style={{ color: '#444', marginTop: '0' }}>Message:</h2>
      <p style={{ whiteSpace: 'pre-wrap', margin: '10px 0' }}>{message}</p>
    </div>
  </div>
);
