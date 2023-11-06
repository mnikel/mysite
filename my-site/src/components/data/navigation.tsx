export const pages = [
    {id: 1, label: "Home", link: "/home"},
    {id: 2, label: "About", link: "/about"},
    {id: 3, label: "Projects", link: "/projects"},
    {id: 4, label: "Blog", link: "/blog"},
    {id: 5, label: "Contact", link: "/contact"},
    {id: 6, label: "Resume", link: "/resume"},
]

export type Page = {
    id: number;
    label: string;
    link: string;
};
