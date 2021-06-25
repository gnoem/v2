export interface IService {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ISkill {
  title: string;
  listItems: string[];
  image: JSX.Element;
}

export interface IProject {
  title: string;
  image: string;
  blurb: string;
  links: {
    primary?: string;
    github?: string;
  }
}

export interface IFeaturedProject extends IProject {
  tags: string[];
  featured: boolean;
  wait?: boolean;
}