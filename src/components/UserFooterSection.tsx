import { useState } from 'react';
import { UserCircle, ChevronDown, LogOut, UserPlus } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useLoggedInAccounts, type Account } from '@/hooks/useLoggedInAccounts';
import { genUserName } from '@/lib/genUserName';
import { LoginArea } from '@/components/auth/LoginArea';
import LoginDialog from '@/components/auth/LoginDialog';

export function UserFooterSection() {
  const { user, metadata } = useCurrentUser();
  const { currentUser, otherUsers, setLogin, removeLogin } = useLoggedInAccounts();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const handleLogin = () => {
    setLoginDialogOpen(false);
  };

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

  const getDisplayName = (account: Account): string => {
    return account.metadata?.display_name || account.metadata?.name || genUserName(account.pubkey);
  };

  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-sm uppercase tracking-wide">Account</h4>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center space-x-3 w-full text-left hover:bg-gray-800 rounded-lg p-2 transition-colors">
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
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56 p-2" align="start">
          {otherUsers.length > 0 && (
            <>
              <div className="font-medium text-sm px-2 py-1.5 text-muted-foreground">Switch Account</div>
              {otherUsers.map((account) => (
                <DropdownMenuItem
                  key={account.id}
                  onClick={() => setLogin(account.id)}
                  className="flex items-center gap-2 cursor-pointer p-2 rounded-md"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={account.metadata?.picture} alt={getDisplayName(account)} />
                    <AvatarFallback>
                      {getDisplayName(account).slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 truncate">
                    <p className="text-sm font-medium">{getDisplayName(account)}</p>
                  </div>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
            </>
          )}

          <DropdownMenuItem
            onClick={() => setLoginDialogOpen(true)}
            className="flex items-center gap-2 cursor-pointer p-2 rounded-md"
          >
            <UserPlus className="w-4 h-4" />
            <span>Add another account</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => currentUser && removeLogin(currentUser.id)}
            className="flex items-center gap-2 cursor-pointer p-2 rounded-md text-red-500 hover:text-red-600"
          >
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <LoginDialog
        isOpen={loginDialogOpen}
        onClose={() => setLoginDialogOpen(false)}
        onLogin={handleLogin}
        onSignup={() => {}}
      />
    </div>
  );
}