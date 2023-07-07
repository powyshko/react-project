import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])} >
      <ThemeSwitcher />
      
      <div className={classNames(cls.links, {}, [className])}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/'}
        >
          Главная
        </AppLink>

        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/about'}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};

