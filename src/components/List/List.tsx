import React, {ReactNode} from 'react'

interface ListProps {
    children?: ReactNode
}

const List = ({ children }: ListProps) => {
    return (
        <ul className='divide-y divide-gray-100'>
            {children}
        </ul>
    )
}

export default List