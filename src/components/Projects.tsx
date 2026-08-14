import { projects } from '../data/projects'
import { info } from '../data/info'

function Projects() {
  return (
    <div className='bg-card-stock px-5 md:px-8 lg:px-10 font-label text-sm'>
    <div className='grid gap-[0.5px] bg-border-rule p-px'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-rule'>
        {projects.slice(0, 4).map((project) => (
          <div key={project.id} className='bg-card-stock p-4 flex flex-col'>
            <p className='text-xs opacity-70 py-1 uppercase flex flex-row justify-between items-center w-full'>
              <span>Entry {String(project.id).padStart(2, '0')}</span>
              <span>{project.status}</span>
            </p>
            {project.url ? (
              <a href={project.url} target='_blank' rel='noopener noreferrer' className='pt-2 font-bold uppercase text-guilloche-teal'>
                {project.title}
              </a>
            ) : (
              <span className='pt-2 font-bold uppercase text-oxblood-stamp'>
                {project.title}
              </span>
            )}
            <span className='py-2'>{project.stack}</span>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-rule'>
        {info.slice(0, 4).map((x) => (
          <div key={x.id} className='bg-card-stock p-4 flex flex-col'>
            <span className='text-xs uppercase tracking-wider pb-2'>{x.label}</span>
            <span className='font-semibold pb-1 font-body'>{x.title}</span>
            <p className='text-sm py-2'>{x.description}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
  )
}

export default Projects


