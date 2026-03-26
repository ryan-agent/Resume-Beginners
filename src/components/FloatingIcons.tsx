const icons = [
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", top: "12%", left: "5%", delay: 0 },
  { name: "Spring", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", top: "32%", left: "2%", delay: 1 },
  { name: "AWS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", top: "15%", right: "8%", delay: 0.5 },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", top: "8%", right: "3%", delay: 1.5 },
  { name: "K8s", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", bottom: "25%", left: "3%", delay: 2 },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", top: "55%", right: "2%", delay: 0.8 },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", top: "45%", left: "8%", delay: 1.2 },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", bottom: "35%", right: "5%", delay: 2.2 },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", bottom: "12%", left: "6%", delay: 0.3 },
  { name: "Kafka", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", top: "70%", left: "1%", delay: 1.6 },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", top: "40%", right: "7%", delay: 2.5 },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      {icons.map((icon, idx) => (
        <div
          key={icon.name}
          className={`absolute flex flex-col items-center gap-1 opacity-20 ${
            idx % 2 === 0 ? "animate-float" : "animate-float-reverse"
          }`}
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            bottom: icon.bottom,
            animationDelay: `${icon.delay}s`,
          }}
        >
          <img src={icon.src} alt={icon.name} className="w-8 h-8 brightness-75" loading="lazy" width={32} height={32} />
          <span className="text-[9px] font-display text-muted-foreground/60 uppercase tracking-wider">{icon.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
