import { projects } from '../data/projects'
import { info } from '../data/info'

function Projects() {
  return (
    <div className='bg-card-stock px-10 grid grid-rows-2 font-label text-sm'>
      <div className='grid grid-cols-4'>
        {projects.slice(0, 4).map((project) => (
          <div key={project.id} className='border p-3 flex flex-col'>
            <p className='text-xs opacity-70 py-1 uppercase flex flex-row justify-between items-center w-full'>
              <span>Entry 0{project.id}</span>
              <span className='place-self-end'>{project.status}</span>
            </p>
            <span className='font-bold uppercase text-guilloche-teal py-2'>{project.title}</span>
            <span>{project.stack}</span>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-4'>
        {info.slice(0, 4).map((x) => (
          <div key={x.id} className='border p-4 flex flex-col'>
            <span className='text-xs uppercase tracking-wider pb-2'>{x.label}</span>
            <span className='font-semibold pb-1 font-body'>{x.title}</span>
            <p className='text-sm'>{x.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects


