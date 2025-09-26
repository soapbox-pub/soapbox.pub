import { describe, it, expect } from 'vitest';
import { z } from 'zod';

// Extract the schema for testing
const appSubmissionSchema = z.object({
  appName: z.string().min(1, 'App name is required'),
  websiteUrl: z.string().url('Please enter a valid URL'),
  repositoryUrl: z.string()
    .url('Please enter a valid repository URL')
    .refine(url => url.startsWith('https://'), {
      message: 'Repository URL must be an HTTPS URL'
    })
    .refine(url => url.endsWith('.git'), {
      message: 'Repository URL must be the HTTPS clone URL ending with .git'
    }),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  appIconUrl: z.string().url('Please enter a valid icon URL'),
  screenshotUrl: z.string().url('Please enter a valid screenshot URL'),
  authorNpub: z.string().min(1, 'Author npub is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
});

describe('AppSubmissionForm validation', () => {
  describe('repositoryUrl validation', () => {
    it('should accept valid .git URLs', () => {
      const validUrls = [
        'https://github.com/username/repo.git',
        'https://gitlab.com/username/repo.git',
        'https://bitbucket.org/username/repo.git',
        'https://codeberg.org/username/repo.git',
      ];

      validUrls.forEach(url => {
        const result = appSubmissionSchema.shape.repositoryUrl.safeParse(url);
        expect(result.success).toBe(true);
      });
    });

    it('should reject URLs not ending with .git', () => {
      const invalidUrls = [
        'https://github.com/username/repo',
        'https://gitlab.com/username/repo/',
        'https://github.com/username/repo.html',
        'https://example.com/repo',
      ];

      invalidUrls.forEach(url => {
        const result = appSubmissionSchema.shape.repositoryUrl.safeParse(url);
        expect(result.success).toBe(false);
        if (!result.success) {
          expect(result.error.issues[0].message).toBe('Repository URL must be the HTTPS clone URL ending with .git');
        }
      });
    });

    it('should reject invalid URLs', () => {
      const invalidUrls = [
        'not-a-url',
        'ftp://github.com/username/repo.git',
        'github.com/username/repo.git',
      ];

      invalidUrls.forEach(url => {
        const result = appSubmissionSchema.shape.repositoryUrl.safeParse(url);
        expect(result.success).toBe(false);
      });
    });

    it('should reject empty URLs', () => {
      const result = appSubmissionSchema.shape.repositoryUrl.safeParse('');
      expect(result.success).toBe(false);
    });
  });

  it('should validate a complete valid form submission', () => {
    const validSubmission = {
      appName: 'My Awesome App',
      websiteUrl: 'https://myapp.com',
      repositoryUrl: 'https://github.com/username/myapp.git',
      description: 'This is a great app that does amazing things for users.',
      appIconUrl: 'https://myapp.com/icon.png',
      screenshotUrl: 'https://myapp.com/screenshot.png',
      authorNpub: 'npub1234567890abcdef',
      tags: ['social', 'productivity'],
    };

    const result = appSubmissionSchema.safeParse(validSubmission);
    expect(result.success).toBe(true);
  });

  it('should validate form submission with suggested tags', () => {
    const validSubmissionWithSuggestedTags = {
      appName: 'Bitcoin App',
      websiteUrl: 'https://bitcoinapp.com',
      repositoryUrl: 'https://github.com/username/bitcoin-app.git',
      description: 'A Bitcoin application built with Shakespeare for productivity.',
      appIconUrl: 'https://bitcoinapp.com/icon.png',
      screenshotUrl: 'https://bitcoinapp.com/screenshot.png',
      authorNpub: 'npub1234567890abcdef',
      tags: ['Shakespeare', 'Bitcoin', 'Productivity'],
    };

    const result = appSubmissionSchema.safeParse(validSubmissionWithSuggestedTags);
    expect(result.success).toBe(true);
  });
});