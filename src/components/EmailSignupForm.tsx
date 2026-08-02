import { Mail } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface EmailSignupFormProps {
  className?: string;
  tags?: string[]; // For compatibility with existing usage
  /** Mailchimp tag id to attach to the subscriber. Defaults to the Soapbox tag. */
  tagId?: string;
}

export function EmailSignupForm({ className, tags: _tags, tagId = '8981074' }: EmailSignupFormProps) {
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

      // Create and submit the form. Mailchimp reads the account (u), list
      // (id), and form (f_id) from the action query string, and the tag from
      // the `tags` body field. Posting u/id in the body (or to the generic
      // `host.` endpoint) silently drops the tag — see ShakespeareMailchimpForm
      // for the working classic-embed pattern this mirrors.
      const form = document.createElement('form');
      form.action =
        'https://pub.us7.list-manage.com/subscribe/post?u=f1f718a93795f42a604d558d8&id=f7271442a0&f_id=00ffa3e4f0';
      form.method = 'post';
      form.target = 'hidden_iframe';

      // Add form fields
      const fields = {
        EMAIL: email,
        tags: tagId,
        // Honeypot: must stay empty (bots fill it), keeps the submission valid.
        b_f1f718a93795f42a604d558d8_f7271442a0: '',
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
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="pl-10 text-gray-900 placeholder:text-gray-500 bg-white border-gray-300"
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