function Footer() {
  return (
    <div className='bg-card-stock flex flex-col gap-4 md:flex-row px-5 md:px-8 lg:px-10 pt-5 pb-5 text-sm'>
        <div className='md:w-1/2 md:flex-auto'>
          <p className='font-label font-bold tracking-wide text-xs md:text-sm'>jacobnighdev@gmail.com · 336-210-7022</p>
          <p className='font-label text-xs md:text-sm'><a href='https://www.linkedin.com/in/jacob-nigh-4b07a3222/' className='hover:text-guilloche-teal underline'>Linkedin</a> · <a href='https://github.com/jnigh-cyber' className='hover:text-guilloche-teal underline'>Github</a></p>
        </div>
        <div className='flex flex-col gap-3 sm:flex-row sm:gap-5 md:w-1/2 md:justify-end text-sm'>
          <a
            href='mailto:jacobnighdev@gmail.com' className='font-label text-xs font-bold uppercase border-body-ink border py-2 px-8 inline-flex items-center justify-center hover:border-guilloche-teal hover:text-guilloche-teal'>
            Tear Off Contact
          </a>
          <a href='/jacob_nigh_resume.pdf' download className='font-label text-xs font-bold uppercase bg-guilloche-teal border border-guilloche-teal text-field-tint py-2 px-8 inline-flex items-center justify-center hover:bg-body-ink hover:text-card-stock'>
            Full Entry Packet
          </a>
        </div>
    </div>
  )
}

export default Footer