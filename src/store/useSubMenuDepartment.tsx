import { useState } from 'react';

const useSubMenuDepartment = () => {
    const [openSubMenuDepartment, setOpenSubMenuDepartment] = useState(false)

    const handleSubMenuDepartment = () => {
        setOpenSubMenuDepartment((toggleOpen) => !toggleOpen)
    }
    
    return {
        openSubMenuDepartment,
        handleSubMenuDepartment,
    }
}

export default useSubMenuDepartment
