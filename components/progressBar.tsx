interface Props {
  text: string;
  value: number;
  isVisible: boolean;
  icon?: React.ReactNode;
}

const ProgressBar = ({ text, value, isVisible, icon }: Props) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
          {icon && <span className="text-xl">{icon}</span>}
          {text}
        </div>
        <span className="text-sm italic text-gray-500 dark:text-gray-400">{value}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-gray-300 dark:bg-gray-700">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-1000 ease-in-out"
          style={{
            width: isVisible ? `${value}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
