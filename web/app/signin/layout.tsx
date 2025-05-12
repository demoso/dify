// import Header from "./_header";

import cn from '@/utils/classnames'
import style from './page.module.css'
import classNames from '@/utils/classnames'

export default async function SignInLayout({ children }: any) {
  return (
    <>
      <div
        className={cn(
          'flex min-h-screen w-full justify-center bg-background-default-burn',
        )}
      >
        <div
          className={classNames(style.loginBg, 'flex w-full shrink-0 flex-col')}
        >
          {/* <Header /> */}
          <div
            className={cn(
              'flex w-full grow flex-col items-center justify-center px-6 md:px-[108px]',
            )}
          >
            <div className="flex flex-col rounded-2xl bg-white p-8 md:w-[400px]">
              {children}
            </div>
          </div>
          <div className="system-xs-regular px-8 py-6 text-center text-text-tertiary">
            © {new Date().getFullYear()} LangGenius, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </>
  )
}
