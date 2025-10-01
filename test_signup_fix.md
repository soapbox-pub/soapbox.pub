# Halloween Signup Button Fix

## Issue
The signup button in the Halloween Hackathon form was not working because the `LoginDialog` component was missing the `onSignup` prop.

## Fix Applied
1. **Added SignupDialog import**: Imported the `SignupDialog` component from `@/components/auth/SignupDialog`
2. **Added signup state**: Added `showSignupDialog` state variable to manage the signup dialog visibility
3. **Connected the signup flow**: Added the `onSignup` prop to the `LoginDialog` component that:
   - Closes the login dialog
   - Opens the signup dialog
4. **Added SignupDialog component**: Rendered the `SignupDialog` component with proper state management

## Changes Made

### Import Statement
```typescript
import SignupDialog from '@/components/auth/SignupDialog';
```

### State Management
```typescript
const [showSignupDialog, setShowSignupDialog] = useState(false);
```

### LoginDialog Integration
```typescript
<LoginDialog
  isOpen={showLoginDialog}
  onClose={() => setShowLoginDialog(false)}
  onLogin={() => setShowLoginDialog(false)}
  onSignup={() => {
    setShowLoginDialog(false);
    setShowSignupDialog(true);
  }}
/>
```

### SignupDialog Addition
```typescript
<SignupDialog
  isOpen={showSignupDialog}
  onClose={() => setShowSignupDialog(false)}
/>
```

## Expected Behavior
Now when users:
1. Click "Log In to Submit" button
2. See the login dialog
3. Click "Sign up" link at the bottom
4. The login dialog closes and the signup dialog opens
5. Users can create a new account with a generated nsec key
6. After signup, they are automatically logged in and can submit their Halloween app

## Files Modified
- `src/components/HalloweenSubmissionForm.tsx`

The signup button should now work correctly for the Halloween Hackathon submission form.