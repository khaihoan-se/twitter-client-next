import React from 'react'
import Twitter from '../icons/Twitter'

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
   className,
   ...props
}) => {
   return (
      <Twitter className={className} />
   )
}

export default React.memo(Logo)
