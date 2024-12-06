import React from 'react'

const Cart = () => {
  return (
    <div className='bg-white h-screen flex flex-col justify-center items-center'>
      <div className='w-[103px] h-[21px] gap-3 flex p-4 items-center'>
        <span className='w-[42px] h-[21px]  opacity-50 font-poppin text-[14px]'>Home </span>
        <span className='w-[13.19px]  opacity-50  border-[#000000]'>/</span> 
        <span className='w-[31px] h-[21px] font-poppin text-[14px]'>Cart</span>
      </div>
      <div className='w-[1170px] h-[840px] gap-20'></div>
    </div>
  )
}

export default Cart
