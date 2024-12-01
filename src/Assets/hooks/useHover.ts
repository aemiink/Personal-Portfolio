import { useState } from 'react';

function useHover(): [boolean, (event: React.MouseEvent<HTMLDivElement>) => void, (event: React.MouseEvent<HTMLDivElement>) => void] {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsHovered(true);
    };
  
    const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsHovered(false);
    };
  
    return [isHovered, handleMouseOver, handleMouseOut];
}

export default useHover;