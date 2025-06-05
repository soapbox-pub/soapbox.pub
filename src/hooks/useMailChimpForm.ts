import { useState } from 'react';

interface MailChimpFormData {
  EMAIL: string;
  tags?: string;
  [key: string]: string | undefined;
}

interface UseMailChimpFormReturn {
  loading: boolean;
  error: boolean;
  success: boolean;
  message: string;
  handleSubmit: (data: MailChimpFormData) => void;
}

export function useMailChimpForm(url: string): UseMailChimpFormReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (data: MailChimpFormData) => {
    setLoading(true);
    setError(false);
    setSuccess(false);
    setMessage('');

    try {
      // Create form data for MailChimp
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

      // Submit to MailChimp (this will likely be blocked by CORS, but that's expected)
      await fetch(url, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // MailChimp doesn't support CORS
      });

      // Since we're using no-cors, we can't read the response
      // We'll assume success if no error is thrown
      setSuccess(true);
      setMessage('Thank you for subscribing!');
    } catch {
      setError(true);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    message,
    handleSubmit,
  };
}