import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const socialLinks = [
    {
        icon: Twitter,
        href: "#",
        label: "Twitter",
    },
    {
        icon: Github,
        href: "#",
        label: "GitHub",
    },
    {
        icon: Linkedin,
        href: "#",
        label: "LinkedIn",
    },
    {
        icon: Instagram,
        href: "#",
        label: "Instagram",
    },
];

const quickLinks = [
    {
        name: "Головна сторінка",
        href: "/",
    },
    {
        name: "Категорії",
        href: "/categories",
    },
    {
        name: "Про нас",
        href: "/about",
    },
    {
        name: "Контакти",
        href: "/contact",
    },
    {
        name: "Конфіденційність",
        href: "/privacy",
    },
];
export default function Footer() {
    return <footer className="bg-background border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-4">Резонанс</h3>
                    <p className="text-muted-foreground mb-4">Тексти, що знаходять відгук у допитливих умах цифрової епохи.
                        Дослідження перетину технологій, дизайну та креативності.</p>
                    <div className="flex space-x-4">
                        {socialLinks.map(link => {
                            const Icon = link.icon;
                            return (
                                <Link key={link.label} href={link.href} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                                    <Icon className="h-5 w-5" />
                                    <span className="sr-only">{link.label}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                {/* Quick links */}
                <div>
                    <h4 className="font-semibold text-foreground mb-4">Швидкі посилання</h4>
                    <ul className="space-y-2">
                        {
                            quickLinks.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-300">{link.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Newsletter */}
                <div >
                    <h4 className="font-semibold text-foreground mb-4">
                        Залишатися в курсі
                    </h4>
                    <p className="text-muted-foreground mb-4">Підпишіться, щоб отримувати останні публікації у свою поштову скриньку.</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Input type="email" placeholder="Ваша пошта" />
                        <Button>Підписатись</Button>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Резонанс. Всі права захищені.</p>
            </div>
        </div>
    </footer>
}