import ExploreActiveIcon from '@/components/icons/ExploreActiveIcon'
import ExploreLineIcon from '@/components/icons/ExploreLineIcon'
import HomeActiveIcon from '@/components/icons/HomeActiveIcon'
import HomeLineIcon from '@/components/icons/HomeLineIcon'
import MessageActiveIcon from '@/components/icons/MessageActiveIcon'
import MessageLineIcon from '@/components/icons/MessageLineIcon'
import NotificationActiveIcon from '@/components/icons/NotificationActiveIcon'
import NotificationLineIcon from '@/components/icons/NotificationLineIcon'
import ProfileActiveIcon from '@/components/icons/ProfileActiveIcon'
import ProfileLineIcon from '@/components/icons/ProfileLineIcon'
import ListActionIcon from '@/components/icons/ListActionIcon'
import ListLineIcon from '@/components/icons/ListLineIcon'
import BookmarkActiveIcon from '@/components/icons/BookmarkActiveIcon'
import BookmarkLineIcon from '@/components/icons/BookmarkLineIcon'

export const MENU_HEADER_LISTS = [
    { page: 'Home', path: '/', icon: HomeLineIcon, activeIcon: HomeActiveIcon },
    { page: 'Explore', path: '/explore', icon: ExploreLineIcon, activeIcon: ExploreActiveIcon },
    { page: 'Notifications', path: '/notifications', icon: NotificationLineIcon, activeIcon: NotificationActiveIcon },
    { page: 'Messages', path: '/messages', icon: MessageLineIcon, activeIcon: MessageActiveIcon },
    { page: 'Bookmarks', path: '/bookmarks', icon: BookmarkLineIcon, activeIcon: BookmarkActiveIcon },
    { page: 'Lists', path: '/lists', icon: ListLineIcon, activeIcon: ListActionIcon },
    { page: 'Profile', path: '/login', icon: ProfileLineIcon, activeIcon: ProfileActiveIcon },
]