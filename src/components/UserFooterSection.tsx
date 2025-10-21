import { UserCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { genUserName } from '@/lib/genUserName';
import { LoginArea } from '@/components/auth/LoginArea';

export function UserFooterSection() {
  const { user, metadata } = useCurrentUser();

  if (!user) {
    // Show anonymous icon and login button when logged out
    return (
      <div className="space-y-3">
        <h4 className="font-semibold text-sm uppercase tracking-wide">Account</h4>
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-gray-400">
            <UserCircle className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <LoginArea className="w-full" />
          </div>
        </div>
      </div>
    );
  }

  // Show user profile when logged in
  const displayName = metadata?.display_name || metadata?.name || genUserName(user.pubkey);
  const profileImage = metadata?.picture;

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-sm uppercase tracking-wide">Account</h4>
      <div className="flex items-center space-x-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={profileImage} alt={displayName} />
          <AvatarFallback className="bg-gray-700 text-gray-300">
            {displayName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="text-white font-medium text-sm truncate">
            {displayName}
          </p>
          <p className="text-gray-400 text-xs">
            Logged in
          </p>
        </div>
      </div>
    </div>
  );
}