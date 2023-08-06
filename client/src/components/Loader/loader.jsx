import { MagnifyingGlass } from 'react-loader-spinner'

export const Loader = () =>
<div className='w-fit mx-auto'>
    <MagnifyingGlass
        visible={true}
        height="60"
        width="60"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor='#c0efff'
        color='#e5e7eb'        
    />
</div>