import React from 'react';

interface EmailSignupFormProps {
  tags?: string[];
  className?: string;
}

export function EmailSignupForm({ tags, className }: EmailSignupFormProps) {
  return (
    <div className={`border border-dashed border-gray-300 p-4 rounded-lg text-center text-gray-500 ${className || ''}`}>
      <p>Email signup form placeholder</p>
      {tags && tags.length > 0 && (
        <p className="text-sm">Tags: {tags.join(', ')}</p>
      )}
    </div>
  );
}