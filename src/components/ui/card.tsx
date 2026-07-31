import { Button } from "@/components/ui/button";

type CardProps = {
  imageUrl: string;
  imagealt?: string;
  title?: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
};

export function Card({ imageUrl, imagealt, title, description, buttonLabel, buttonVariant = "primary" }: CardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-20 pt-2 bg-white hover:bg-gray-50 transition-colors text-center item-center h-[500px]">
      <div className="mb-3 overflow-hidden rounded-md flex justify-center w-full"></div>
      <img src={imageUrl} alt={imagealt || "Card Image"} className="w-full h-78 object-cover rounded-lg mb-4" />
      {title && <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>}
      <p className="text-black-600 mb-4">{description}</p>
      <Button variant={buttonVariant}>{buttonLabel}</Button>
    </div>
  );
}