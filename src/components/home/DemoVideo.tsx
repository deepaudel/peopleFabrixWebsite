export function DemoVideo() {
  return (
    <section className="mx-auto max-w-5xl px-0 pb-20 sm:px-6">
      <p className="mb-4 px-6 text-center text-sm text-zinc-500 dark:text-zinc-400 sm:px-0">
        See People Fabrix answer a real HR policy question, in the actual product —
        use the player controls to view it full screen.
      </p>
      <div className="overflow-hidden border border-black/[.08] shadow-2xl shadow-black/10 sm:rounded-2xl dark:border-white/[.145] dark:shadow-black/50">
        <video
          className="h-auto w-full"
          src="/videos/chatbot-demo.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="auto"
          aria-label="People Fabrix chatbot product demo"
        >
          Your browser does not support embedded video.
        </video>
      </div>
    </section>
  );
}
