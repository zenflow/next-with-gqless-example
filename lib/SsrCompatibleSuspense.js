import { Suspense } from 'react'

export const SsrCompatibleSuspense = process.browser ? Suspense : props => props.children

export default SsrCompatibleSuspense
