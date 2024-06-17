import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/Avatar'
import { UserIcon } from 'lucide-react'
import { Separator } from './ui/Separator'
import { Link } from 'react-router-dom'

function UserAuth() {
  return (
    <div className="group flex items-center gap-4">
      <Avatar className="border-2 border-border text-foreground transition group-hover:border-brand-primary group-hover:text-brand-primary group-hover:drop-shadow-lg">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="user icon"
        />
        <AvatarFallback>
          <UserIcon />
        </AvatarFallback>
      </Avatar>
      <div className="flex h-5 items-center space-x-4 [&>a]:px-1 [&>a]:py-3">
        <Link
          to="/login"
          size="sm"
          className="header-action hover:text-brand-primary"
        >
          Login
        </Link>

        <Separator orientation="vertical" />

        <Link
          to="/registration"
          size="sm"
          className="header-action hover:text-brand-primary"
        >
          Registration
        </Link>
      </div>
    </div>
  )
}

export default UserAuth
