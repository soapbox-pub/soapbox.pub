import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ShakespeareMailchimpFormProps {
  className?: string;
}

export function ShakespeareMailchimpForm({ className }: ShakespeareMailchimpFormProps) {
  const [npubValue, setNpubValue] = useState('');
  const [npubError, setNpubError] = useState('');

  const validateNpub = (value: string) => {
    if (value && !value.startsWith('npub')) {
      setNpubError('Nostr public key must start with "npub"');
      return false;
    }
    setNpubError('');
    return true;
  };

  const handleNpubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNpubValue(value);
    if (value) {
      validateNpub(value);
    } else {
      setNpubError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (npubValue && !validateNpub(npubValue)) {
      e.preventDefault();
      return;
    }
  };

  return (
    <Card className={cn("w-full max-w-2xl mx-auto", className)}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-shakespeare-navy-700">
          Get the latest Shakespeare updates and resources
        </CardTitle>
        <CardDescription>
          Stay updated with the latest features and announcements. Optionally provide your npub to link your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <style type="text/css">
            {`
              #mc_embed_signup {
                background: transparent !important;
                clear: left;
                font: 14px Helvetica, Arial, sans-serif;
                width: 100% !important;
              }
              #mc_embed_signup h2 {
                display: none;
              }
              #mc_embed_signup .mc-field-group {
                margin-bottom: 1rem;
              }
              #mc_embed_signup label {
                font-weight: 600;
                margin-bottom: 0.5rem;
                display: block;
                color: inherit;
              }
              #mc_embed_signup input[type="text"],
              #mc_embed_signup input[type="email"] {
                width: 100%;
                padding: 0.75rem;
                border: 1px solid #d1d5db;
                border-radius: 0.5rem;
                font-size: 14px;
                background: white;
              }
              #mc_embed_signup input.error {
                border-color: #ef4444 !important;
              }
              #mc_embed_signup .button {
                background: linear-gradient(to right, #429adf, #2a82c8) !important;
                border: none !important;
                border-radius: 0.5rem !important;
                color: white !important;
                padding: 0.75rem 2rem !important;
                font-weight: 600 !important;
                cursor: pointer !important;
                width: 100% !important;
                margin-top: 1rem !important;
              }
              #mc_embed_signup .button:hover {
                background: linear-gradient(to right, #5fade4, #429adf) !important;
              }
              #mc_embed_signup .indicates-required {
                font-size: 12px;
                color: #6b7280;
                margin-bottom: 1rem;
              }
              #mc_embed_signup .asterisk {
                color: #ef4444;
              }
              .dark #mc_embed_signup input[type="text"],
              .dark #mc_embed_signup input[type="email"] {
                background: #374151;
                border-color: #4b5563;
                color: white;
              }
              .dark #mc_embed_signup label {
                color: #f9fafb;
              }
              .dark #mc_embed_signup input.error {
                border-color: #ef4444 !important;
              }
            `}
          </style>
          <div id="mc_embed_signup">
            <form
              action="https://pub.us7.list-manage.com/subscribe/post?u=f1f718a93795f42a604d558d8&id=f7271442a0&f_id=00ffa3e4f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              onSubmit={handleSubmit}
            >
              <div id="mc_embed_signup_scroll">
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-NPUB">
                    Nostr Public Key (npub) <span style={{ color: '#6b7280', fontWeight: 'normal' }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="NPUB"
                    className={`text ${npubError ? 'error' : ''}`}
                    id="mce-NPUB"
                    placeholder="npub1..."
                    value={npubValue}
                    onChange={handleNpubChange}
                  />
                  {npubError && (
                    <div className="error-message" style={{ color: '#ef4444', fontSize: '12px', marginTop: '0.25rem' }}>
                      {npubError}
                    </div>
                  )}
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div hidden>
                  <input type="hidden" name="tags" value="8982394" />
                </div>
                <div id="mce-responses" className="clear">
                  <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                  <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                </div>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                  <input type="text" name="b_f1f718a93795f42a604d558d8_f7271442a0" tabIndex={-1} />
                </div>
                <div className="clear">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Sign Up" />
                </div>
              </div>
            </form>
          </div>
          <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
          <script type="text/javascript">
            {`(function($) {
              window.fnames = new Array();
              window.ftypes = new Array();
              fnames[6]='NPUB';ftypes[6]='text';
              fnames[0]='EMAIL';ftypes[0]='email';
              fnames[1]='FNAME';ftypes[1]='text';
              fnames[2]='LNAME';ftypes[2]='text';
              fnames[3]='ADDRESS';ftypes[3]='address';
              fnames[4]='PHONE';ftypes[4]='phone';
              fnames[5]='BIRTHDAY';ftypes[5]='birthday';
            }(jQuery));
            var $mcj = jQuery.noConflict(true);`}
          </script>
        </div>
      </CardContent>
    </Card>
  );
}