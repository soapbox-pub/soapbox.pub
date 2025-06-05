import { Mail } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface EmailSignupFormProps {
  className?: string;
  tags?: string[]; // For compatibility with existing usage
}

export function EmailSignupForm({ className, tags: _tags }: EmailSignupFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Create a hidden iframe for the form submission
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden_iframe';
      document.body.appendChild(iframe);

      // Create and submit the form
      const form = document.createElement('form');
      form.action = 'https://host.us7.list-manage.com/subscribe/post';
      form.method = 'post';
      form.target = 'hidden_iframe';

      // Add form fields
      const fields = {
        u: 'f1f718a93795f42a604d558d8',
        id: 'f7271442a0',
        EMAIL: email,
        tags: '8981074' // Soapbox tag
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

      setStatus('success');
      setMessage('Thanks for subscribing! Check your email to confirm.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const disabled = status === 'loading' || status === 'success';

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-2", className)}>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="pl-10"
            disabled={disabled}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={disabled}
          className="px-6"
        >
          {status === 'loading' ? 'Signing up...' : 'Sign up'}
        </Button>
      </div>
      
      {status === 'error' && message && (
        <div className="text-red-500 text-sm mt-2">
          {message}
        </div>
      )}
      
      {status === 'success' && message && (
        <div className="text-green-500 text-sm mt-2">
          {message}
        </div>
      )}
    </form>
  );
}