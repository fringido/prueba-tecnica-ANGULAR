export interface Flags {
  png: string;
  svg: string;
  alt: string;
}
export interface Name{
  common: string;
  official: string;
}

export interface Contry{
  name: Name;
  flags: Flags;
}
