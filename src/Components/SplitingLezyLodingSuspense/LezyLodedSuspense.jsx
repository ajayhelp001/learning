import React, { Suspense } from 'react'

const LazyLoadings = React.lazy(() => import('./LazyLoading'));

const LezyLodedSuspense = () => {
  return (
    <Suspense fallback={<h2>wait.....</h2>}>
       <LazyLoadings/>
    </Suspense>
  )
}

export default LezyLodedSuspense