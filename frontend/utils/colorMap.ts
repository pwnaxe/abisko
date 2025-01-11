export const colorMap: { [key: string]: string } = {
    "Fjord Blue": "bg-blue-800",
    "Light Blue": "bg-blue-400",
    "Aurora Teal": "bg-teal-500",
    "Green": "bg-green-500",
    "Magenta": "bg-purple-500",
    "Orange": "bg-orange-500",
    "yellow": "bg-yellow-300",
    "red": "bg-red-800",
    "pink": "bg-pink-500",
  };
  
  export function getColorClass(color: string): string {
    return colorMap[color] || 'bg-gray-500';
  }
  
  