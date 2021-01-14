export const getTheme = (): string => {
    return localStorage.getItem("application-theme") || "dark"
}

export const setTheme = (theme: string): void => {
    localStorage.setItem("application-theme", theme)

    if (theme === "dark") {
        document.querySelector("meta[name=theme-color]")?.setAttribute("content", '#222831')
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    } else {
        document.querySelector("meta[name=theme-color]")?.setAttribute("content", '#f5f5f5')
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }
}