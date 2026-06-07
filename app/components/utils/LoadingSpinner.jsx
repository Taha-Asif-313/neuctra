const LoadingSpinner = ({ message = "Loading...", fullScreen = true }) => {
  const content = (
    <div className="flex flex-col items-center">
      <div className="relative">
        {/* Spinner Ring */}
        <div
          className={`
            w-16
            h-16
            animate-spin
            rounded-full
            border-2
            border-primary/20
            border-t-primary
          `}
        />

        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-6 w-6 object-contain"
            draggable={false}
          />
        </div>
      </div>

      {message && (
        <p className="mt-4 text-center text-sm text-zinc-400">{message}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner;
