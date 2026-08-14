function Header() {
  return (
    <div className='font-semibold bg-card-stock px-5 md:px-8 lg:px-10 pt-4 lg:pt-5 pb-2 flex flex-col gap-1 md:flex-row text-[10px] md:text-xs'>
        <p className='font-label uppercase md:w-1/2 md:flex-auto'>Entry Card · <span className='text-guilloche-teal'>Open Division</span> · Submitted by the entrant</p>
        <p className='font-label md:w-1/2 md:flex md:justify-end'>NO. <span className='text-guilloche-teal'>JN-0611-336</span></p>
    </div>
  )
}

export default Header