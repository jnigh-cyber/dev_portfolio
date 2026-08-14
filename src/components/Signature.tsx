import { RINGS } from '../lib/hypotrochoid';

function Signature() {
  return (
    <div className='relative bg-card-stock px-5 md:px-8 lg:px-10 pt-6 lg:pt-7'>
      <div className='flex items-start justify-between gap-4 md:gap-6'>
        <div className='flex-1 min-w-0 md:min-w-42.5'>
          <h2 className='font-display italic tracking-wide text-xl md:text-2xl border-b border-body-ink pb-2 max-w-none md:max-w-72/100 lg:max-w-56/100'>
            Jacob Nigh
          </h2>
          <p className='font-label text-field-label uppercase text-xs pt-2'>Signature of Entrant</p>
        </div>

        <div className='relative w-20 h-20 md:w-26 md:h-26 lg:w-31 lg:h-31 shrink-0'>
          <svg viewBox='-140 -140 280 280' className='w-full h-full' aria-hidden='true'>
            <defs>
              {RINGS.map((ring, i) => (
                <path key={i} id={`seal-ring-${i}`} d={ring.d} />
              ))}
            </defs>

            <g fill='none' stroke='#93321F' strokeWidth='0.8' opacity='0.8' transform='scale(0.92)'>
              {RINGS.map((ring, i) =>
                Array.from({ length: ring.count }, (_, n) => (
                  <use
                    key={`${i}-${n}`}
                    href={`#seal-ring-${i}`}
                    transform={`rotate(${n * (360 / ring.count) + ring.offset})`}
                  />
                )),
              )}
            </g>

            <circle r='62' fill='#E9DFC6' opacity='0.93' />
            <circle r='62' fill='none' stroke='#93321F' strokeWidth='3' />
            <circle r='54' fill='none' stroke='#93321F' strokeWidth='1' />
          </svg>

          <div
            className='absolute inset-0 flex flex-col items-center justify-center
            font-label text-[6px] md:text-[7px] lg:text-[8px] font-bold uppercase tracking-[0.04em]
            text-oxblood-stamp text-center leading-[1.4]'
          >
            <span>
              Self
              <br />
              Certified
            </span>
          </div>
        </div>
      </div>

      <div className='mt-4 border-b-2 border-dashed border-body-ink' />
      <div className='absolute bottom-0 left-0 z-10 h-4 w-4 lg:h-5.5 lg:w-5.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-kraft-board' />
      <div className='absolute bottom-0 right-0 z-10 h-4 w-4 lg:h-5.5 lg:w-5.5 translate-x-1/2 translate-y-1/2 rounded-full bg-kraft-board' />
    </div>
  );
}

export default Signature;