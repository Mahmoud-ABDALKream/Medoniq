export function BackgroundDecor() {
  return (
    <>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-medoniq-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-medoniq-accent rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-medoniq-success rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-medoniq-primary rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-4 h-4 bg-medoniq-accent/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-12 w-6 h-6 bg-medoniq-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/5 w-3 h-3 bg-medoniq-success/30 rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-medoniq-accent/15 rounded-full animate-bounce"></div>
      </div>
    </>
  )
}
