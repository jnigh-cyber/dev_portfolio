function Header() {
  return (
    <div className='font-semibold bg-card-stock px-10 pt-5 pb-2 flex text-xs'>
        <p className='w-1/2 flex-auto font-label uppercase'>Entry Card · <span className='text-guilloche-teal'>Open Division</span> · Submitted by the entrant</p>
        <p className='w-1/2 flex justify-end font-label'>NO. <span className='text-guilloche-teal'>JN-0611-336</span></p>
    </div>
  )
}

export default Header