import React from 'react'
import Fade from 'react-reveal/Fade';

function CompanyTags({title, Icon}) {
  return (
  <Fade bottom>
    <div className="bg-slate-500 py-3 opacity-70 flex flex-col items-center rounded-md justify-center">
        <div>
          {Icon}
        </div>
        <a
          href="#"
          className="text-white text-center text-sm font-lato no-underline"
          >
            {title}
        </a>
    </div>
  </Fade>
  )
}

export default React.memo(CompanyTags);
