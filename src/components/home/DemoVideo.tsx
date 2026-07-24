export function DemoVideo() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="overflow-hidden rounded-2xl border border-black/[.08] shadow-2xl shadow-black/10 dark:border-white/[.145] dark:shadow-black/50">
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
