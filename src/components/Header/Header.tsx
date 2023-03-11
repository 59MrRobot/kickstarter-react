import React from 'react';
import { HeaderContent } from '../HeaderContent/HeaderContent';
import { Topbar } from '../Topbar';
import "./Header.scss";

export const Header: React.FC = React.memo(
  () => {
    return (
      <header className="Header">
        <div className="Header__wrapper">
          <Topbar />

          <HeaderContent />
        </div>
      </header>
    )
  }
)