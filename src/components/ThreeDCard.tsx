
interface ThreeDCardProps {
  title: string;
  description: string;
  icon: string;
}

const ThreeDCard = ({ title, description, icon }: ThreeDCardProps) => {
  return (
    <div className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ThreeDCard;
