import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { LucideRefreshCw, RefreshCcw, RefreshCw, RefreshCwIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function CourseCardItem({course}) {
  return (
    <div className='border rounded-lg shadow-md p-5'>
      <div> 
        <div className='flex justify-between items-center mt-7' > 
            <Image src = {'/knowledge.png'} alt='other' width={50} height={50} />
            <h2 className='text-[10px] p-1 px-2 rounded-full bg-black text-white'>20th December 2024</h2>
        </div>
        <h2 className='mt-3 font-medium text-lg'>{course?.courseLayout.course_name}</h2>
        <p className='text-sm line-clamp-2 text-gray-500 mt-2'> {course?.courseLayout.course_summary}</p>
      
      <div> 
        
      </div>
      <div className='mt-3'>
      <Progress value={0}/>
      </div>
      <div className='mt-3 flex justify-end'> 
        {course?.status == 'Generating'? <h2 className='text-sm flex gap-2 item-center p-1 px-2 rounded-full bg-black text-white'> 
        <RefreshCw className='h-5 w-5 animate-spin'/>
        Generating...</h2>: <Button>View</Button>}
      </div>
      </div>
    </div>
  )
}

export default CourseCardItem
