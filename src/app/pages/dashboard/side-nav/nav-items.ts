// nav-items.ts
import { INavData } from '@coreui/angular';
import { cilSpeedometer, cilDrop, cilPencil, cilSettings, cilUser } from '@coreui/icons';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/layout/dashboard',
    iconComponent: cilSpeedometer, // Use the imported icon
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Overview',
    url: '/layout/overview',
    iconComponent: cilDrop
  },
  {
    name: 'Settings',
    url: '/layout/settings',
    iconComponent: cilSettings
  },
  {
    name: 'Profile',
    url: '/layout/profile',
    iconComponent: cilUser
  },
  {
    name: 'Typography',
    url: '/layout/theme/typography',
    iconComponent: cilPencil
  }
];
