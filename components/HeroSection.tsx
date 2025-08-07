import * as motion from "motion/react-client"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
    return <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left content */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
                    <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-foreground">
                        Напишіть цей <span className="italic text-primary">Резонанс</span>
                    </h1>
                    <p className="max-w-2xl mb-8 text-xl md:text-2xl text-muted-foreground">
                        Огляд технологій, дизайну та креативності від цифрового майстра, який вірить у силу вдумливого сторітеллінгу.
                    </p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                        <Button size="lg" className="group">Прочитати останій пост <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />

                        </Button>
                    </motion.div>
                </motion.div>
                {/* Right content*/}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="hidden lg:block">
                    <div className="relative">
                        <div className="absolute rounded-full w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl -top-10 -right-10"></div>
                        <div className="w-96 h-96 bg-gradient-to-tl from-secondary/30 to-primary/30 rounded-2xl transform rotate-6 shadow-2xl"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
}