'use client'
import { AiOutlineMenu } from 'react-icons/ai';
import { useCallback, useState } from 'react';
import Avatar from './Avatar';
import MenuItem from './MenuItem';
import Button from '../Button';
import useRegisterModal from '@/app/hooks/useRegisterModal';


const UserMenu = () => {
  const registerModal = useRegisterModal();

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, [])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
          "
        >
          AirBnb your Home
        </div>
        <div
          onClick={toggleOpen}
          className="
            md:px-2
            p-4
            md:py-1
            border-[1px]
            flex
            flex-row
            border-neutral-200
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          "
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className='
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          '
        >
         
          <div className='flex flex-col cursor-pointer border-red-300'>
            <>
              <div className="
                  px-4
                  py-3
                  hover:bg-neutral-100
                  transition
                  font-semibold
                "
              >
              <button onClick={registerModal.onOpen}>
                Log In
              </button>
              </div>
              <div   
                className="
                    px-4
                    py-3
                    hover:bg-neutral-100
                    transition
                    font-semibold
                " 
              >
                <button onClick={registerModal.onOpen}>
                  Sign Up
                </button>
              </div>
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu