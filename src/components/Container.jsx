const Container = ({ children, className = '' }) => {
  return (
    <div className={`w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Container
