import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CreatorProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean    
}

const Creator = ({ imgSrc, className, dark = false, ...props }: CreatorProps) => {
    return ( 
        <div className={cn('relative pointer-events-none z-50 overflow-hidden',
            className
        )}
        {...props}>
            <img src={imgSrc} className='pointer-events-none w-full h-auto' alt='content creator image'/>
            <div className='absolute -z-10 inset-0'>
                <img className='object-cover w-full h-full' src={imgSrc} alt='overlaying web image' />
            </div>
        </div>
     );
}
 
export default Creator;