import React, { FC, ReactNode } from 'react'
import { Cross, ChevronLeft } from '@components/icons'
import { UserNav } from '@components/common'
import cn from 'clsx'
import s from './SidebarLayout.module.css'

type ComponentProps = { className?: string; children?: ReactNode } & (
  | { handleClose: () => any; handleBack?: never }
  | { handleBack: () => any; handleClose?: never }
)

const SidebarLayout: FC<ComponentProps> = ({
  children,
  className,
  handleBack,
  handleClose,
}) => {
  return (
    <div className={cn(s.root, className)}>
      <header className={s.header}>
        {handleClose && (
          <button
            onClick={handleClose}
            aria-label="Chiudi"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none mr-6"
          >
            <Cross className="h-6 w-6 hover:text-accent-3" />
            <span className="ml-2 text-accent-7 text-sm ">Chiudi</span>
          </button>
        )}
        {handleBack && (
          <button
            onClick={handleBack}
            aria-label="Go back"
            className="hover:text-accent-5 transition ease-in-out duration-150 flex items-center focus:outline-none"
          >
            <ChevronLeft className="h-6 w-6 hover:text-accent-3" />
            <span className="ml-2 text-accent-7 text-xs">Indietro</span>
          </button>
        )}

        <UserNav />
      </header>
      <div className={s.container}>{children}</div>
    </div>
  )
}

export default SidebarLayout
