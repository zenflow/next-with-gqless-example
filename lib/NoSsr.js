import dynamic from 'next/dynamic'

export const NoSsr = dynamic(() => Promise.resolve(props => (<>{props.children}</>)), {ssr: false})

export default NoSsr
