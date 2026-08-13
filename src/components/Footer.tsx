function Footer() {
  return (
    <div className='bg-card-stock flex px-10 pt-5 pb-5 text-sm'>
        <div className='w-1/2 flex-auto'>
          <p className='font-label'>jacobnighdev@gmail.com · 336-210-7022</p>
          <p className='font-label'><a href='https://www.linkedin.com/in/jacob-nigh-4b07a3222/' className='hover:text-guilloche-teal underline'>Linkedin</a> · <a href='https://github.com/jnigh-cyber' className='hover:text-guilloche-teal underline'>Github</a></p>
        </div>
        <div className='w-1/2 flex justify-end text-sm'>
          <button className='font-label text-xs uppercase border-body-ink border-1 p-1 px-8 mr-5 hover:bg-body-ink hover:text-card-stock'>Tear Off Contact</button>
          <button className='font-label text-xs uppercase bg-guilloche-teal border-1 border-guilloche-teal text-field-tint p-1 px-8 hover:bg-card-stock hover:text-guilloche-teal'>Open the live builds</button>
        </div>
    </div>
  )
}

export default Footer