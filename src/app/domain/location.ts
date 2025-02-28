export interface Location {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  position: {
    lat: number;
    lng: number;
  };
} 