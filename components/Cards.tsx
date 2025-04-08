type props = {
    title: string;
    content: string;
}
const Card: React.FC<props> = (props) => {
    const {title, content} = props;

	return (
        <div
        className="bg-sky-950 rounded-lg p-6 transition-all duration-500 transform overflow-hidden relative cursor-pointer hover:scale-105 hover:shadow-2xl">
            {/* Glowing border effect on hover */}
            <div className="absolute inset-0 rounded-lg transition-opacity duration-500 "></div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
            <div className="absolute w-32 h-32 rounded-full bg-teal-500 blur-xl -top-12 -right-12"></div>
            <div className="absolute w-24 h-24 rounded-full bg-blue-500 blur-xl -bottom-8 -left-8"></div>
            </div>
            
            <h2 className="text-xl font-semibold mb-3 relative z-10 transition-colors duration-300 text-teal-400 hover:text-white">
            {title}
            </h2>
            
            <p className="text-slate-300 relative z-10">{content}</p>
            
        </div>
    );
}
export default Card;